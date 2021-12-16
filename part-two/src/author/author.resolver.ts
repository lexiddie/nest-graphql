import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Book } from '../book/book.schema';
import { BookService } from '../book/book.service';
import { Author, CreateAuthorInput } from './author.schema';
import { AuthorService } from './author.service';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private authorService: AuthorService, private bookService: BookService) {}

  @Query(() => [Author])
  async authors() {
    return this.authorService.findMany();
  }

  @Mutation(() => Author)
  async createAuthor(@Args('input') input: CreateAuthorInput) {
    return this.authorService.createAuthor(input);
  }

  @ResolveField(() => [Book])
  async books(@Parent() author: Author) {
    return this.bookService.findByAuthorId(author._id);
  }
}
