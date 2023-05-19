import { Injectable } from '@nestjs/common';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';

// @app
import { FindBookQuery } from '@app/library/book/application/find/find-book.query';
import { LibraryBook } from '@api/graphql';
import { LibraryBookDto } from '../dto';

@Injectable()
export class LibraryFindBookHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<LibraryBook | LibraryBookDto>
    {
        return await this.queryBus.ask(new FindBookQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}