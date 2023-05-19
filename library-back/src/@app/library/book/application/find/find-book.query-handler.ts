import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { BookResponse } from '../../domain/book.response';
import { BookMapper } from '../../domain/book.mapper';
import { FindBookQuery } from './find-book.query';
import { FindBookService } from './find-book.service';

@QueryHandler(FindBookQuery)
export class FindBookQueryHandler implements IQueryHandler<FindBookQuery>
{
    private readonly mapper: BookMapper = new BookMapper();

    constructor(
        private readonly findBookService: FindBookService,
    ) {}

    async execute(query: FindBookQuery): Promise<BookResponse>
    {
        const book = await this.findBookService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(book);
    }
}