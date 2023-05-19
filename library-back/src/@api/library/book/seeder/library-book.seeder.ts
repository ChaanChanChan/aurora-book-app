import { Injectable } from '@nestjs/common';
import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';

//
import { CreateBooksCommand } from '@app/library/book/application/create/create-books.command';
import { books } from '@app/library/book/infrastructure/mock/mock-book.data';

@Injectable()
export class LibraryBookSeeder
{
    constructor(
        private readonly commandBus: ICommandBus,
        private readonly queryBus: IQueryBus,
    ) {}

    async main(): Promise<boolean>
    {
        await this.commandBus.dispatch(new CreateBooksCommand(
            books,
            {
                timezone: process.env.TZ ,
            },
        ));

        return true;
    }
}