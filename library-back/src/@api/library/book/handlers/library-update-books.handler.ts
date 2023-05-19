import { Injectable } from '@nestjs/common';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';

// @app
import { GetBooksQuery } from '@app/library/book/application/get/get-books.query';
import { UpdateBooksCommand } from '@app/library/book/application/update/update-books.command';
import { LibraryBook, LibraryUpdateBooksInput } from '@api/graphql';
import { LibraryBookDto, LibraryUpdateBooksDto } from '../dto';

@Injectable()
export class LibraryUpdateBooksHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: LibraryUpdateBooksInput | LibraryUpdateBooksDto,
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<LibraryBook | LibraryBookDto>
    {
        await this.commandBus.dispatch(new UpdateBooksCommand(
            payload,
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new GetBooksQuery(
            queryStatement,
            constraint,
            {
                timezone,
            },
        ));
    }
}