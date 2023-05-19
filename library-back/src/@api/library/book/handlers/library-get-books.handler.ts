import { Injectable } from '@nestjs/common';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';

// @app
import { GetBooksQuery } from '@app/library/book/application/get/get-books.query';
import { LibraryBook } from '@api/graphql';
import { LibraryBookDto } from '../dto';

@Injectable()
export class LibraryGetBooksHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<LibraryBook[] | LibraryBookDto[]>
    {
        return await this.queryBus.ask(new GetBooksQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}