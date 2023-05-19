import { Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import {
    BookId,
    BookTitle,
    BookPublishedAt,
    BookPrice,
    BookAuthorId,
    BookCreatedAt,
    BookUpdatedAt,
    BookDeletedAt,
} from '../../domain/value-objects';
import { IBookRepository } from '../../domain/book.repository';
import { LibraryBook } from '../../domain/book.aggregate';

@Injectable()
export class UpdateBookByIdService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IBookRepository,
    ) {}

    async main(
        payload: {
            id: BookId;
            title?: BookTitle;
            publishedAt?: BookPublishedAt;
            price?: BookPrice;
            authorId?: BookAuthorId;
        },
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const book = LibraryBook.register(
            payload.id,
            payload.title,
            payload.publishedAt,
            payload.price,
            payload.authorId,
            null, // createdAt
            new BookUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        // update by id
        await this.repository.updateById(book, {
            constraint,
            cQMetadata,
            updateByIdOptions: cQMetadata?.repositoryOptions,
        });

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const bookRegister = this.publisher.mergeObjectContext(
            book,
        );

        bookRegister.updated(book); // apply event to model events
        bookRegister.commit(); // commit all events of model
    }
}