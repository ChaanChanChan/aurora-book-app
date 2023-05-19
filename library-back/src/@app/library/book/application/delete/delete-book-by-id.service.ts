import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import { BookId } from '../../domain/value-objects';
import { IBookRepository } from '../../domain/book.repository';

@Injectable()
export class DeleteBookByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IBookRepository,
    ) {}

    async main(
        id: BookId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // get object to delete
        const book = await this.repository.findById(id, { constraint, cQMetadata });

        // it is not necessary to pass the constraint in the delete, if the object
        // is not found in the findById, an exception will be thrown.
        await this.repository.deleteById(
            book.id,
            {
                deleteOptions: cQMetadata?.repositoryOptions,
                cQMetadata,
            },
        );

        // insert EventBus in object, to be able to apply and commit events
        const bookRegister = this.publisher.mergeObjectContext(book);

        bookRegister.deleted(book); // apply event to model events
        bookRegister.commit(); // commit all events of model
    }
}