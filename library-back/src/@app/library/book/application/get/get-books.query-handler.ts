import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { BookResponse } from '../../domain/book.response';
import { BookMapper } from '../../domain/book.mapper';
import { GetBooksQuery } from './get-books.query';
import { GetBooksService } from './get-books.service';

@QueryHandler(GetBooksQuery)
export class GetBooksQueryHandler implements IQueryHandler<GetBooksQuery>
{
    private readonly mapper: BookMapper = new BookMapper();

    constructor(
        private readonly getBooksService: GetBooksService,
    ) {}

    async execute(query: GetBooksQuery): Promise<BookResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.getBooksService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        ));
    }
}