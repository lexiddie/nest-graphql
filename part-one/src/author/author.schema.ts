import { Field, ObjectType, ID } from '@nestjs/graphql';
import { Book } from '../book/book.schema';

@ObjectType()
export class Author {
  @Field(() => ID) // <-- GraphQL Type
  id: number; // <-- TypeScript Type

  @Field()
  name: string;

  @Field(() => [Book])
  books: Book[];
}
