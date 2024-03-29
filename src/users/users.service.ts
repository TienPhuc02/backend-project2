import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateUserDto, RegisterUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User, UserDocument } from './schema/user.schema';
import mongoose from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import { IUser } from './users.interface';
import aqp from 'api-query-params';
import { USER_ROLE } from 'src/databases/sample';
import { Role, RoleDocument } from 'src/roles/schema/role.schema';
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: SoftDeleteModel<UserDocument>,
    @InjectModel(Role.name) private roleModel: SoftDeleteModel<RoleDocument>,
  ) {}
  getHashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  };
  async create(createUserDto: CreateUserDto, user: IUser) {
    const { email, password, name, address, age, company, role, gender } =
      createUserDto;
    const hashPassword = this.getHashPassword(password);
    const newUser = await this.userModel.create({
      email,
      password: hashPassword,
      name,
      role: role,
      gender,
      address,
      age,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
      company,
    });
    return {
      _id: newUser._id,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    };
  }
  async register(registerUserDto: RegisterUserDto) {
    const { email, password, name, address, age, gender } = registerUserDto;
    const isExist = this.userModel.findOne({ email });
    if (!isExist) {
      throw new BadRequestException(`Email: ${email} đã tồn tại.`);
    }
    const userRole = await this.roleModel.findOne({ name: USER_ROLE });
    const hashPassword = this.getHashPassword(password);
    return await this.userModel.create({
      email,
      gender,
      password: hashPassword,
      name,
      address,
      age,
      role: userRole?._id,
    });
  }

  async findAll(current: number, pageSize: number, qs: string) {
    const { filter, sort, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    const offset: number = (+current - 1) * +pageSize;
    const defaultLimit = +pageSize ? +pageSize : 10;
    const totalItems = (await this.userModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);
    if ((sort as any) === '-updatedAt') {
      // @ts-ignore: Unreachable code error
      sort = '-updatedAt';
    }
    if ((sort as any) === '-name') {
      // @ts-ignore: Unreachable code error
      sort = '-name';
    }
    if ((sort as any) === '-email') {
      // @ts-ignore: Unreachable code error
      sort = '-email';
    }
    if ((sort as any) === '-createdAt') {
      // @ts-ignore: Unreachable code error
      sort = '-createdAt';
    }
    const result = await this.userModel
      .find(filter)
      .skip(offset)
      .limit(defaultLimit)
      .sort(sort as any)
      .populate(population)
      .select('-password')
      .exec();
    return {
      meta: {
        current: current, //trang hien tai
        pageSize: pageSize, // so luong ban ghi 1 trang
        pages: totalPages, //tong so trang
        total: totalItems, //tong so ban ghi
      },
      result,
    };
  }

  findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found user';
    }
    return this.userModel
      .findOne({ _id: id })
      .select('-password')
      .populate({ path: 'role', select: { name: 1, _id: 1 } });
  }
  findOneByUsername(username: string) {
    return this.userModel
      .findOne({ email: username })
      .populate({ path: 'role', select: { name: 1, description: 1 } });
  }

  isValidPassword = (password: string, hash: string) => {
    return compareSync(password, hash);
  };
  update(id: string, updateUserDto: UpdateUserDto, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found user';
    }
    const { email, name, address, age, gender, role, company } = updateUserDto;
    return this.userModel.updateOne(
      { _id: id },
      {
        email,
        company,
        name,
        address,
        age,
        gender,
        role,
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
  }

  async remove(id: string, user: IUser) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found user';
    }
    const foundUser = await this.userModel.findById(id);
    if (foundUser && foundUser.email === 'admin@gmail.com') {
      throw new BadRequestException('không thể xóa tai khoan admin');
    }
    await this.userModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return this.userModel.softDelete({ _id: id });
  }
  updateUserToken = async (refreshToken: string, _id: string) => {
    return await this.userModel.updateOne(
      { _id },
      {
        refreshToken,
      },
    );
  };
  findUserByToken = async (refreshToken: string) => {
    return await this.userModel
      .findOne({ refreshToken })
      .populate({ path: 'role', select: { name: 1 } });
  };
}

//nếu mà chưa có company thì tự thêm company
