import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { IUser } from 'src/users/users.interface';
import { InjectModel } from '@nestjs/mongoose';
import { Role, RoleDocument } from './schema/role.schema';
import { SoftDeleteModel } from 'soft-delete-plugin-mongoose';
import mongoose from 'mongoose';
import aqp from 'api-query-params';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role.name)
    private roleModel: SoftDeleteModel<RoleDocument>,
  ) {}
  async create(createRoleDto: CreateRoleDto, user: IUser) {
    const { description, isActive, name, permissions } = createRoleDto;
    const newRole = await this.roleModel.create({
      description,
      isActive,
      name,
      permissions,
      createdBy: {
        _id: user._id,
        email: user.email,
      },
    });
    return {
      _id: newRole._id,
      createdAt: newRole.createdAt,
    };
  }

  async findAll(current: number, pageSize: number, qs: string) {
    const { filter, sort, population } = aqp(qs);
    delete filter.current;
    delete filter.pageSize;
    const offset: number = (+current - 1) * +pageSize;
    const defaultLimit = +pageSize ? +pageSize : 10;
    const totalItems = (await this.roleModel.find(filter)).length;
    const totalPages = Math.ceil(totalItems / defaultLimit);
    if ((sort as any) === '-updatedAt') {
      // @ts-ignore: Unreachable code error
      sort = '-updatedAt';
    }
    if ((sort as any) === '-description') {
      // @ts-ignore: Unreachable code error
      sort = '-description';
    }
    if ((sort as any) === '-createdAt') {
      // @ts-ignore: Unreachable code error
      sort = '-createdAt';
    }
    const result = await this.roleModel
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

  async findOne(id: string) {
    return await this.roleModel.findOne({ _id: id });
  }

  update = async (id: string, updateRoleDto: UpdateRoleDto, user: IUser) => {
    const { description, isActive, name, permissions } = updateRoleDto;
    const newPermissionUpdate = await this.roleModel.updateOne(
      { _id: id },
      {
        description,
        isActive,
        name,
        permissions,
        updatedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return newPermissionUpdate;
  };

  remove = async (id: string, user: IUser) => {
    const foundRole = await this.roleModel.findById(id);
    if(foundRole.name==="ADMIN"){
      throw new BadRequestException("không thể xóa role ADMIN")
    }
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found permission';
    }
    await this.roleModel.updateOne(
      { _id: id },
      {
        deletedBy: {
          _id: user._id,
          email: user.email,
        },
      },
    );
    return this.roleModel.softDelete({ _id: id });
  };
}
