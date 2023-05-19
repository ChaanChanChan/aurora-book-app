import { Injectable } from '@nestjs/common';
import { AuditingMeta, ICommandBus } from '@aurorajs.dev/core';

// @app
import { CreateBooksCommand } from '@app/library/book/application/create/create-books.command';
import { LibraryCreateBookInput } from '@api/graphql';
import { LibraryCreateBookDto } from '../dto';

@Injectable()
export class LibraryCreateBooksHandler
{
    constructor(
        private readonly commandBus: ICommandBus,
    ) {}

    async main(
        payload: LibraryCreateBookInput[] | LibraryCreateBookDto[],
        timezone?: string,
    ): Promise<boolean>
    {
        await this.commandBus.dispatch(new CreateBooksCommand(
            payload,
            {
                timezone,
            },
        ));
        return true;
    }
}