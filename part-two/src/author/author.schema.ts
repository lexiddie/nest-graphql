import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import * as mongoose from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Book } from '../book/book.schema';

export type AuthorDocument = Author & mongoose.Document;

@Schema()
@ObjectType()
export class Author {
  @Field(() => ID) // <-- GraphQL Type
  _id: string; // <-- TypeScript Type

  @Prop()
  @Field()
  name: string;

  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Book' }] })
  @Field(() => [Book])
  books: Book[];
}

export const AuthorSchema = SchemaFactory.createForClass(Author);

@InputType()
export class CreateAuthorInput {
  @Field()
  name: string;
}
