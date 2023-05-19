import { IQueryHandler } from '@nestjs/cqrs';
import { BookResponse } from '../../domain/book.response';
import { FindBookQuery } from './find-book.query';
import { FindBookService } from './find-book.service';
export declare class FindBookQueryHandler implements IQueryHandler<FindBookQuery> {
    private readonly findBookService;
    private readonly mapper;
    constructor(findBookService: FindBookService);
    execute(query: FindBookQuery): Promise<BookResponse>;
}
