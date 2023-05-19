import { Injectable } from '@nestjs/common';
import { AuditingMeta, ICommandBus, IQueryBus, QueryStatement, Utils } from '@aurorajs.dev/core';

// @app
import { FindBookByIdQuery } from '@app/library/book/application/find/find-book-by-id.query';
import { UpdateBookByIdCommand } from '@app/library/book/application/update/update-book-by-id.command';
import { LibraryBook, LibraryUpdateBookByIdInput } from '@api/graphql';
import { LibraryBookDto, LibraryUpdateBookByIdDto } from '../dto';

@Injectable()
export class LibraryUpdateBookByIdHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: LibraryUpdateBookByIdInput | LibraryUpdateBookByIdDto,
        constraint?: QueryStatement,
        timezone?: string,
    ): Promise<LibraryBook | LibraryBookDto>
    {
        const book = await this.queryBus.ask(new FindBookByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));

        const dataToUpdate = Utils.diff(payload, book);

        await this.commandBus.dispatch(new UpdateBookByIdCommand(
            {
                ...dataToUpdate,
                id: payload.id,
            },
            constraint,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new FindBookByIdQuery(
            payload.id,
            constraint,
            {
                timezone,
            },
        ));
    }
}