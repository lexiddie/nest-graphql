import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import * as mongoose from 'mongoose';
import { Field, ObjectType, ID, InputType } from '@nestjs/graphql';
import { Author } from '../author/author.schema';

export type BookDocument = Book & mongoose.Document;

@Schema()
@ObjectType()
export class Book {
  @Field(() => ID)
  _id: string;

  @Prop({ required: true })
  @Field()
  title: string;

  @Prop({ required: true })
  @Field()
  isbn: string;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Author' })
  @Field(() => Author)
  author: Author;
}

export const BookSchema = SchemaFactory.createForClass(Book);

BookSchema.index({ author: 1 });

@InputType()
export class CreateBookInput {
  @Field()
  title: string;

  @Field()
  isbn: string;

  @Field()
  author: string;
}

@InputType()
export class FindBookInput {
  @Field()
  _id: string;
}
