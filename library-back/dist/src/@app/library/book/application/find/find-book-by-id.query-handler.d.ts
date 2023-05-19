import { IQueryHandler } from '@nestjs/cqrs';
import { BookResponse } from '../../domain/book.response';
import { FindBookByIdQuery } from './find-book-by-id.query';
import { FindBookByIdService } from './find-book-by-id.service';
export declare class FindBookByIdQueryHandler implements IQueryHandler<FindBookByIdQuery> {
    private readonly findBookByIdService;
    private readonly mapper;
    constructor(findBookByIdService: FindBookByIdService);
    execute(query: FindBookByIdQuery): Promise<BookResponse>;
}
