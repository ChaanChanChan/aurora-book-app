import { ConflictException, Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
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
export class UpsertBookService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IBookRepository,
    ) {}

    async main(
        payload: {
            id: BookId;
            title: BookTitle;
            publishedAt: BookPublishedAt;
            price: BookPrice;
            authorId: BookAuthorId;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // upsert aggregate with factory pattern
        const book = LibraryBook.register(
            payload.id,
            payload.title,
            payload.publishedAt,
            payload.price,
            payload.authorId,
            new BookCreatedAt({ currentTimestamp: true }),
            new BookUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository
            .upsert(book, {
                upsertOptions: cQMetadata?.repositoryOptions,
            });

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const bookRegister = this.publisher.mergeObjectContext(
            book,
        );

        bookRegister.created(book); // apply event to model events
        bookRegister.commit(); // commit all events of model
    }
}