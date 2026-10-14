import { Module } from '@nestjs/common';
import { LibraryService } from './library.service.js';
import { LibraryController } from './library.controller.js';
import { MongooseError } from 'mongoose';
import { MongooseModule } from '@nestjs/mongoose';
import { Book, BookSchema } from './schemas/book.schema.js';
import { Library, LibrarySchema } from './schemas/library.schema.js';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Book.name, schema: BookSchema }]),
    MongooseModule.forFeature([{ name: Library.name, schema: LibrarySchema }]),
  ],
  providers: [LibraryService],
  controllers: [LibraryController]
})
export class LibraryModule { }
