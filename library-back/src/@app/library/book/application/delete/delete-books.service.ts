import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import { IBookRepository } from '../../domain/book.repository';
import { AddBooksContextEvent } from '../events/add-books-context.event';

@Injectable()
export class DeleteBooksService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IBookRepository,
    ) {}

    async main(
        queryStatement?: QueryStatement,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get objects to delete
        const books = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        await this.repository.delete({
            queryStatement,
            constraint,
            cQMetadata,
            deleteOptions: cQMetadata?.repositoryOptions,
        });

        // create AddBooksContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const booksRegistered = this.publisher.mergeObjectContext(
            new AddBooksContextEvent(books),
        );

        booksRegistered.deleted(); // apply event to model events
        booksRegistered.commit(); // commit all events of model
    }
}