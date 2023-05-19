import { Injectable } from '@nestjs/common';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';

// @app
import { PaginateBooksQuery } from '@app/library/book/application/paginate/paginate-books.query';
import { Pagination } from '@api/graphql';

@Injectable()
export class LibraryPaginateBooksHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<Pagination>
    {
        return await this.queryBus.ask(new PaginateBooksQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}