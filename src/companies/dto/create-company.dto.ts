import { IsNotEmpty } from 'class-validator';

export class CreateCompanyDto {
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  name: string;
  @IsNotEmpty({ message: 'Please Enter Your Logo' })
  logo: string;
  @IsNotEmpty({ message: 'Please Enter Your Address' })
  address: string;
  @IsNotEmpty({ message: 'Please Enter Your Description' })
  description: string;
}
