import { PartialType } from '@nestjs/mapped-types';
import { CreatePermissionDto } from './create-permission.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdatePermissionDto extends PartialType(CreatePermissionDto) {
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  name: string;
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  apiPath: string;
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  method: string;
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  module: string;
}
