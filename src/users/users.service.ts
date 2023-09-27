import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schema/user.schema';
import mongoose, { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { compareSync, genSaltSync, hashSync } from 'bcryptjs';
@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}
  hashPassword = (password: string) => {
    const salt = genSaltSync(10);
    const hash = hashSync(password, salt);
    return hash;
  };
  async create(createUserDto: CreateUserDto) {
    const { email, password, name, address, age } = createUserDto;
    const hashPassword = this.hashPassword(password);
    return await this.userModel.create({
      email,
      password: hashPassword,
      name,
      address,
      age,
    });
  }

  findAll() {
    return `This action returns all users`;
  }

  findOne(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found user';
    }
    return this.userModel.findOne({ _id: id });
  }
  findOneByUsername(username: string) {
    console.log("🚀 ~ file: users.service.ts:39 ~ UsersService ~ findOneByUsername ~ username:", username)
    return this.userModel.findOne({ email: username });
  }

  isValidPassword = (password: string, hash: string) => {
    console.log("🚀 ~ file: users.service.ts:43 ~ UsersService ~ hash:", hash)
    console.log("🚀 ~ file: users.service.ts:43 ~ UsersService ~ password:", password)
    return compareSync(password, hash);
  };
  update(id: string, updateUserDto: UpdateUserDto) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found user';
    }
    const { name, address, age } = updateUserDto;
    return this.userModel.updateOne(
      { _id: id },
      {
        name,
        address,
        age,
      },
    );
  }

  remove(id: string) {
    if (!mongoose.Types.ObjectId.isValid(id)) {
      return 'not found user';
    }
    return this.userModel.deleteOne({ _id: id });
  }
}
