import { Injectable } from '@nestjs/common';
import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';

// @app
import { FindBookByIdQuery } from '@app/library/book/application/find/find-book-by-id.query';
import { LibraryBook } from '@api/graphql';
import { LibraryBookDto } from '../dto';

@Injectable()
export class LibraryFindBookByIdHandler
{
    constructor(
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<LibraryBook | LibraryBookDto>
    {
        return await this.queryBus.ask(new FindBookByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));
    }
}