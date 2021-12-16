import { Injectable } from '@nestjs/common';
import books from '../data/books';
import { Book, CreateBookInput } from './book.schema';

@Injectable()
export class BookService {
  books: Partial<Book>[];

  constructor() {
    this.books = books;
  }

  async findMany() {
    return this.books;
  }

  async findById(id: any) {
    const records = this.books.filter((book) => book.id === id);

    return records.length ? records[0] : null;
  }

  async findByAuthorId(authorId) {
    return this.books.filter((book: Book) => book.author === authorId);
  }

  async createBook(book: CreateBookInput) {
    this.books = [book, ...this.books];
    return book;
  }
}
