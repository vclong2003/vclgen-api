import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Info, InfoSchema } from './info.schema';
import { Session, SessionSchema } from './session.schema';

@Schema()
export class User {
  _id: string;

  @Prop({ unique: true, required: true })
  email: string;

  @Prop({ required: true })
  username: string;

  @Prop({ required: true })
  password: string;

  @Prop({ type: InfoSchema })
  info: Info;

  @Prop({ type: [String], ref: 'User' })
  follower_ids: string[];

  @Prop({ type: [String], ref: 'User' })
  following_ids: string[];

  @Prop({ type: [String], ref: 'Post' })
  post_ids: string[];

  @Prop({ type: [SessionSchema] })
  sessions: Session[];
}

export const UserSchema = SchemaFactory.createForClass(User);
