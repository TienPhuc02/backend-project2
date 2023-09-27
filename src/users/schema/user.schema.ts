import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop({required:true})
  email: string;
  @Prop({required:true})
  password: string;
  @Prop()
  name: string;
  @Prop()
  address: string;
  @Prop()
  age: number;
}

export const UserSchema = SchemaFactory.createForClass(User);