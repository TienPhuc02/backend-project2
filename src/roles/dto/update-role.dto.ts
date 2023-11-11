import { PartialType } from '@nestjs/mapped-types';
import { CreateRoleDto } from './create-role.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateRoleDto extends PartialType(CreateRoleDto) {
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  name: string;
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  description: string;
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  permissions: string[];
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  isActive: boolean;
}
