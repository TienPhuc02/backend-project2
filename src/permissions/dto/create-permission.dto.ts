import { IsNotEmpty } from "class-validator";

export class CreatePermissionDto {
  @IsNotEmpty({message:"Please Enter Your Name"})
  name: string;
  @IsNotEmpty({message:"Please Enter Your Name"})
  apiPath: string;
  @IsNotEmpty({message:"Please Enter Your Name"})
  method: string;
  @IsNotEmpty({message:"Please Enter Your Name"})
  module: string;
}
