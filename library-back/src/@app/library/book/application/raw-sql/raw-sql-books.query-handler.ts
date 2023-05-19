import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { BookResponse } from '../../domain/book.response';
import { BookMapper } from '../../domain/book.mapper';
import { RawSQLBooksQuery } from './raw-sql-books.query';
import { RawSQLBooksService } from './raw-sql-books.service';

@QueryHandler(RawSQLBooksQuery)
export class RawSQLBooksQueryHandler implements IQueryHandler<RawSQLBooksQuery>
{
    private readonly mapper: BookMapper = new BookMapper();

    constructor(
        private readonly rawSQLBooksService: RawSQLBooksService,
    ) {}

    async execute(query: RawSQLBooksQuery): Promise<BookResponse[]>
    {
        return this.mapper.mapAggregatesToResponses(await this.rawSQLBooksService.main(
            query.rawSQL,
            query.cQMetadata,
        ));
    }
}