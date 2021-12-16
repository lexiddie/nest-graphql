import { Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Book } from '../book/book.schema';
import { BookService } from '../book/book.service';
import { Author } from './author.schema';
import { AuthorService } from './author.service';

@Resolver(() => Author)
export class AuthorResolver {
  constructor(private authorService: AuthorService, private bookService: BookService) {}

  @Query(() => [Author])
  async authors() {
    return this.authorService.findMany();
  }

  @ResolveField(() => [Book])
  async books(@Parent() author: Author) {
    return this.bookService.findByAuthorId(author.id);
  }
}
