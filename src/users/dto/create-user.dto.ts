import { IsEAN, IsEmail, IsNotEmpty } from 'class-validator';

export class CreateUserDto {
  @IsEmail({}, { message: 'Email must be an email' })
  @IsNotEmpty({ message: 'Please Enter Your Email' })
  email: string;
  @IsNotEmpty({ message: 'Please Enter Your Password' })
  password: string;
  name: string;
  address: string;
  age: number;
}
