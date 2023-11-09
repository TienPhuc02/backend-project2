import { IsNotEmpty } from 'class-validator';
import mongoose from 'mongoose';

export class CreateResumeDto {
  @IsNotEmpty({ message: 'Please Enter Your url' })
  url: string;
  @IsNotEmpty({ message: 'Please Enter Your companyId' })
  companyId: mongoose.Schema.Types.ObjectId;
  @IsNotEmpty({ message: 'Please Enter Your jobId' })
  jobId: mongoose.Schema.Types.ObjectId;
}
