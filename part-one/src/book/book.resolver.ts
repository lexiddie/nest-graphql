import { Args, Mutation, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Author } from '../author/author.schema';
import { AuthorService } from '../author/author.service';
import { Book, CreateBookInput, FindBookInput } from './book.schema';
import { BookService } from './book.service';

@Resolver(() => Book)
export class BookResolver {
  constructor(private bookService: BookService, private authorService: AuthorService) {}

  @Query(() => [Book]) // <-- What will the query return?
  async books() {
    // <-- Query name
    return this.bookService.findMany(); // Resolve the query
  }

  @Query(() => Book)
  async book(@Args('input') { id }: FindBookInput) {
    return this.bookService.findById(id);
  }

  @Mutation(() => Book)
  async createBook(@Args('input') book: CreateBookInput) {
    return this.bookService.createBook(book);
  }

  @ResolveField(() => Author)
  async author(@Parent() book: Book) {
    return this.authorService.findById(book.author);
  }
}
