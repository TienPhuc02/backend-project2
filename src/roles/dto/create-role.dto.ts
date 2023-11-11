import { IsNotEmpty } from 'class-validator';

export class CreateRoleDto {
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  name: string;
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  description: string;
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  permissions: string[];
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  isActive: boolean;
}
