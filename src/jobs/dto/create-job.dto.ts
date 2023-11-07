import { Type } from 'class-transformer';
import {
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
}
export class CreateJobDto {
  @IsNotEmpty({ message: 'Please Enter Your Name' })
  name: string;
  @IsNotEmpty({ message: 'Please Enter Your Skills' })
  skills: string[];
  @IsNotEmpty({ message: 'Please Enter Your Location' })
  location: string;
  @IsNotEmpty({ message: 'Please Enter Your Salary' })
  salary: number;
  @IsNotEmpty({ message: 'Please Enter Your Quantity' })
  quantity: number;
  @IsNotEmpty({ message: 'Please Enter Your Level' })
  level: string;
  @IsNotEmpty({ message: 'Please Enter Your Description' })
  description: string;
  @IsNotEmptyObject()
  @IsObject()
  @ValidateNested()
  @Type(() => Company)
  company: Company;
  @IsNotEmpty({ message: 'Please Enter Your Start Date' })
  startDate: Date;
  @IsNotEmpty({ message: 'Please Enter Your End Date' })
  endDate: Date;
  @IsNotEmpty({ message: 'Please Enter Your Active' })
  active: boolean;
}
