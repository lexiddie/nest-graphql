import { Injectable } from '@nestjs/common';
import authors from '../data/authors';
import { Author } from './author.schema';

@Injectable()
export class AuthorService {
  authors: Partial<Author>[];

  constructor() {
    this.authors = authors;
  }

  async findById(id) {
    const records = this.authors.filter((author) => author.id === id);
    return records.length ? records[0] : null;
  }

  async findMany() {
    return this.authors;
  }
}
