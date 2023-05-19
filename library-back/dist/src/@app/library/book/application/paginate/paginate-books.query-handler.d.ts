import { IQueryHandler } from '@nestjs/cqrs';
import { PaginationResponse } from '@aurorajs.dev/core';
import { PaginateBooksQuery } from './paginate-books.query';
import { PaginateBooksService } from './paginate-books.service';
export declare class PaginateBooksQueryHandler implements IQueryHandler<PaginateBooksQuery> {
    private readonly paginateBooksService;
    constructor(paginateBooksService: PaginateBooksService);
    execute(query: PaginateBooksQuery): Promise<PaginationResponse>;
}
