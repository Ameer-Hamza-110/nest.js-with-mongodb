import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Book } from './schemas/book.schema.js';
import { Model } from 'mongoose';
import { Library } from './schemas/library.schema.js';

@Injectable()
export class LibraryService {
    constructor(
        @InjectModel(Book.name) private bookModel: Model<Book>,
        @InjectModel(Library.name) private libraryModel: Model<Library>,
    ) { }

    async createLibrary(): Promise<Library> {
        const book1 = await this.bookModel.create({ title: "Lookism", author: "Park tae joon" })
        const book2 = await this.bookModel.create({ title: "Attack on title", author: "japanse author" })
        
        const library = await this.libraryModel.create({
            name: 'Chomu library',
            books: [book1._id, book2._id],
        });
        return library
    }

    async findAllLibrary() {
        const library = await this.libraryModel.find().populate('books').exec()
        return library;
    }
}
