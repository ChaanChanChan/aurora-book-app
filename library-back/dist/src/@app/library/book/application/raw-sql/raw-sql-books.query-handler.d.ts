import { IQueryHandler } from '@nestjs/cqrs';
import { BookResponse } from '../../domain/book.response';
import { RawSQLBooksQuery } from './raw-sql-books.query';
import { RawSQLBooksService } from './raw-sql-books.service';
export declare class RawSQLBooksQueryHandler implements IQueryHandler<RawSQLBooksQuery> {
    private readonly rawSQLBooksService;
    private readonly mapper;
    constructor(rawSQLBooksService: RawSQLBooksService);
    execute(query: RawSQLBooksQuery): Promise<BookResponse[]>;
}
