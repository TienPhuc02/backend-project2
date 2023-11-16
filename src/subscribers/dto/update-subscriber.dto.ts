import { PartialType } from '@nestjs/mapped-types';
import { CreateSubscriberDto } from './create-subscriber.dto';
import { IsNotEmpty } from 'class-validator';

export class UpdateSubscriberDto extends PartialType(CreateSubscriberDto) {
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  name: string;
  @IsNotEmpty({ message: 'Please Enter Your Skills' })
  skills: string[];
  @IsNotEmpty({ message: 'Please Enter Your email' })
  email: string;
}
