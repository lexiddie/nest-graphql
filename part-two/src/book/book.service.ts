import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Book, CreateBookInput, BookDocument } from './book.schema';

@Injectable()
export class BookService {
  constructor(@InjectModel(Book.name) private bookModel: Model<BookDocument>) {}

  async findMany() {
    return this.bookModel.find().lean();
  }

  async findById(id: any) {
    return this.bookModel.findById(id).lean();
  }

  async findByAuthorId(authorId: any) {
    return this.bookModel.find({ author: authorId });
  }

  async createBook(book: CreateBookInput) {
    return this.bookModel.create(book);
  }
}
