import { PartialType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateCompanyDto extends PartialType(CreateCompanyDto) {
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  name: string;
  @IsNotEmpty({ message: 'Please Enter Your Logo' })
  logo: string;
  @IsNotEmpty({ message: 'Please Enter Your address' })
  address: string;
  @IsNotEmpty({ message: 'Please Enter Your description' })
  description: string;
}
