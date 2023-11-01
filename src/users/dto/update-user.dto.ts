import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
} from 'class-validator';
import { Type } from 'class-transformer';
import mongoose from 'mongoose';
class Company {
  @IsNotEmpty()
  _id: mongoose.Schema.Types.ObjectId;
  @IsNotEmpty()
  name: string;
}
export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  name: string;
  @IsNotEmpty({ message: 'Please Enter Your Email' })
  @IsEmail({}, { message: 'Email Must Be An Email' })
  email: string;
  @IsNotEmpty({ message: 'Please Enter Your Password' })
  password: string;
  @IsNotEmpty({ message: 'Please Enter Your Age' })
  age: number;
  @IsNotEmpty({ message: 'Please Enter Your Gender' })
  gender: string;
  @IsNotEmpty({ message: 'Please Enter Your Address' })
  address: string;
  @IsNotEmpty({ message: 'Please Enter Your Role' })
  role: string;
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;
}
