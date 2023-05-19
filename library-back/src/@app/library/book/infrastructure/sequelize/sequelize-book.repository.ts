import { Injectable, LiteralObject } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { IBookRepository } from '../../domain/book.repository';
import { LibraryBook } from '../../domain/book.aggregate';
import { BookMapper } from '../../domain/book.mapper';
import { LibraryBookModel } from './sequelize-book.model';

@Injectable()
export class SequelizeBookRepository extends SequelizeRepository<LibraryBook, LibraryBookModel> implements IBookRepository
{
    public readonly aggregateName: string = 'LibraryBook';
    public readonly mapper: BookMapper = new BookMapper();

    constructor(
        @InjectModel(LibraryBookModel)
        public readonly repository: typeof LibraryBookModel,
        public readonly criteria: ICriteria,
        public readonly auditingRunner: AuditingRunner,
    )
    {
        super();
    }
}