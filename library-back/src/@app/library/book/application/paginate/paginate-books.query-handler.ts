import { IQueryHandler, QueryHandler } from '@nestjs/cqrs';
import { PaginationResponse } from '@aurorajs.dev/core';
import { PaginateBooksQuery } from './paginate-books.query';
import { PaginateBooksService } from './paginate-books.service';

@QueryHandler(PaginateBooksQuery)
export class PaginateBooksQueryHandler implements IQueryHandler<PaginateBooksQuery>
{
    constructor(
        private readonly paginateBooksService: PaginateBooksService,
    ) {}

    async execute(query: PaginateBooksQuery): Promise<PaginationResponse>
    {
        const { total, count, rows } = await this.paginateBooksService.main(
            query.queryStatement,
            query.constraint,
            query.cQMetadata,
        );

        return new PaginationResponse(
            total,
            count,
            rows.map(item => item.toDTO()),
        );
    }
}