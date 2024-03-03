import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Info {
  _id: string;

  @Prop()
  avatar_url: string;

  @Prop()
  dob: Date;
}

export const InfoSchema = SchemaFactory.createForClass(Info);
