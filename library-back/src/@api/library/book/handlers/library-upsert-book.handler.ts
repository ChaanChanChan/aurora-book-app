import { Injectable } from '@nestjs/common';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';

// @app
import { FindBookByIdQuery } from '@app/library/book/application/find/find-book-by-id.query';
import { UpsertBookCommand } from '@app/library/book/application/upsert/upsert-book.command';
import { LibraryBook, LibraryUpdateBookByIdInput } from '@api/graphql';
import { LibraryBookDto, LibraryUpdateBookByIdDto } from '../dto';

@Injectable()
export class LibraryUpsertBookHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: LibraryUpdateBookByIdInput | LibraryUpdateBookByIdDto,
        timezone?: string,
    ): Promise<LibraryBook | LibraryBookDto>
    {
        await this.commandBus.dispatch(new UpsertBookCommand(
            payload,
            {
                timezone,
            },
        ));

        return await this.queryBus.ask(new FindBookByIdQuery(
            payload.id,
            {},
            {
                timezone,
            },
        ));
    }
}