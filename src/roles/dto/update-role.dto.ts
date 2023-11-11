import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  name: string;
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  description: string;
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  permissions: mongoose.Schema.Types.ObjectId[];
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  isActive: boolean;
}
