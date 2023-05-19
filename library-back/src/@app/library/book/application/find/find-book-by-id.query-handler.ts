import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { BookResponse } from '../../domain/book.response';
import { BookMapper } from '../../domain/book.mapper';
import { BookId } from '../../domain/value-objects';
import { FindBookByIdQuery } from './find-book-by-id.query';
import { FindBookByIdService } from './find-book-by-id.service';

@QueryHandler(FindBookByIdQuery)
export class FindBookByIdQueryHandler implements IQueryHandler<FindBookByIdQuery>
{
    private readonly mapper: BookMapper = new BookMapper();

    constructor(
        private readonly findBookByIdService: FindBookByIdService,
    ) {}

    async execute(query: FindBookByIdQuery): Promise<BookResponse>
    {
        const book = await this.findBookByIdService.main(
            new BookId(query.id),
            query.constraint,
            query.cQMetadata,
        );

        return this.mapper.mapAggregateToResponse(book);
    }
}