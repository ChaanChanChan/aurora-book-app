import { Injectable } from '@nestjs/common';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';

// @app
import { GetBooksQuery } from '@app/library/book/application/get/get-books.query';
import { DeleteBooksCommand } from '@app/library/book/application/delete/delete-books.command';
import { LibraryBook } from '@api/graphql';
import { LibraryBookDto } from '../dto';

@Injectable()
export class LibraryDeleteBooksHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<LibraryBook[] | LibraryBookDto[]>
    {
        const books = await this.queryBus.ask(new GetBooksQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new DeleteBooksCommand(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return books;
    }
}