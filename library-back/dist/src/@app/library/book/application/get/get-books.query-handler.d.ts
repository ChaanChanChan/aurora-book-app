import { IQueryHandler } from '@nestjs/cqrs';
import { BookResponse } from '../../domain/book.response';
import { GetBooksQuery } from './get-books.query';
import { GetBooksService } from './get-books.service';
export declare class GetBooksQueryHandler implements IQueryHandler<GetBooksQuery> {
    private readonly getBooksService;
    private readonly mapper;
    constructor(getBooksService: GetBooksService);
    execute(query: GetBooksQuery): Promise<BookResponse[]>;
}
