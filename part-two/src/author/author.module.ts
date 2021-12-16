import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { BookService } from '../book/book.service';
import { AuthorResolver } from './author.resolver';
import { AuthorService } from './author.service';
import { Author, AuthorSchema } from './author.schema';
import { Book, BookSchema } from '../book/book.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Book.name, schema: BookSchema },
      { name: Author.name, schema: AuthorSchema }
    ])
  ],
  providers: [AuthorResolver, AuthorService, BookService]
})
export class AuthorModule {}
