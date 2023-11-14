import { Type } from 'class-transformer';
import {
  IsEmail,
  IsNotEmpty,
  IsNotEmptyObject,
  IsObject,
  ValidateNested,
} from 'class-validator';
import mongoose from 'mongoose';

class Company {
  @IsNotEmpty()
  _id: mongoose.Schema.Types.ObjectId;
  @IsNotEmpty()
  name: string;
  // @IsNotEmpty()
  logo: string;
}
export class CreateUserDto {
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
  role: mongoose.Schema.Types.ObjectId;
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;
}

export class RegisterUserDto {
  @IsNotEmpty({
    message: 'Please Enter Your Name',
  })
  name: string;
  @IsNotEmpty({
    message: 'Please Enter Your Email',
  })
  email: string;
  @IsNotEmpty({
    message: 'Please Enter Your Password',
  })
  password: string;
  @IsNotEmpty({
    message: 'Please Enter Your Age',
  })
  age: number;
  @IsNotEmpty({
    message: 'Please Enter Your Gender',
  })
  gender: string;
  @IsNotEmpty({
    message: 'Please Enter Your Address',
  })
  address: string;
}
