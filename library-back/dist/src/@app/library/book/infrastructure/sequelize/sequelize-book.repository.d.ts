import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { IBookRepository } from '../../domain/book.repository';
import { LibraryBook } from '../../domain/book.aggregate';
import { BookMapper } from '../../domain/book.mapper';
import { LibraryBookModel } from './sequelize-book.model';
export declare class SequelizeBookRepository extends SequelizeRepository<LibraryBook, LibraryBookModel> implements IBookRepository {
    readonly repository: typeof LibraryBookModel;
    readonly criteria: ICriteria;
    readonly auditingRunner: AuditingRunner;
    readonly aggregateName: string;
    readonly mapper: BookMapper;
    constructor(repository: typeof LibraryBookModel, criteria: ICriteria, auditingRunner: AuditingRunner);
}
