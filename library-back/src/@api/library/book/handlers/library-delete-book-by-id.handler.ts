import { Injectable } from '@nestjs/common';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';

// @app
import { FindBookByIdQuery } from '@app/library/book/application/find/find-book-by-id.query';
import { DeleteBookByIdCommand } from '@app/library/book/application/delete/delete-book-by-id.command';
import { LibraryBook } from '@api/graphql';
import { LibraryBookDto } from '../dto';

@Injectable()
export class LibraryDeleteBookByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        id: string,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<LibraryBook | LibraryBookDto>
    {
        const book = await this.queryBus.ask(new FindBookByIdQuery(
            id,
            constraint,
            {
                timezone,
            },
        ));

        await this.commandBus.dispatch(new DeleteBookByIdCommand(
            id,
            constraint,
            {
                timezone,
            },
        ));

        return book;
    }
}