import { Injectable } from '@nestjs/common';
import { AuditingMeta, ICommandBus, IQueryBus } from '@aurorajs.dev/core';

// @app
import { FindBookByIdQuery } from '@app/library/book/application/find/find-book-by-id.query';
import { CreateBookCommand } from '@app/library/book/application/create/create-book.command';
import { LibraryBook, LibraryCreateBookInput } from '@api/graphql';
import { LibraryBookDto, LibraryCreateBookDto } from '../dto';

@Injectable()
export class LibraryCreateBookHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(
        payload: LibraryCreateBookInput | LibraryCreateBookDto,
        timezone?: string,
    ): Promise<LibraryBook | LibraryBookDto>
    {
        await this.commandBus.dispatch(new CreateBookCommand(
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