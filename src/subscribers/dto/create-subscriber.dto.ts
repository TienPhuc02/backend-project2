import { IsNotEmpty } from 'class-validator';

export class CreateSubscriberDto {
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  name: string;
  @IsNotEmpty({ message: 'Please Enter Your Skills' })
  skills: string[];
  @IsNotEmpty({ message: 'Please Enter Your email' })
  email: string;
}
