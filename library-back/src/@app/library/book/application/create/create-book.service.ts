import { ConflictException, Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { CQMetadata } from '@aurorajs.dev/core';
import { IBookRepository } from '../../domain/book.repository';
import { LibraryBook } from '../../domain/book.aggregate';
import {
	BookAuthorId,
	BookCreatedAt,
	BookDeletedAt,
	BookId,
	BookPrice,
	BookPublishedAt,
	BookTitle,
	BookUpdatedAt,
} from '../../domain/value-objects';

@Injectable()
export class CreateBookService
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
        // create aggregate with factory pattern
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

        await this.repository.create(book, { createOptions: cQMetadata?.repositoryOptions });

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const bookRegister = this.publisher.mergeObjectContext(
            book,
        );

        bookRegister.created(book); // apply event to model events
        bookRegister.commit(); // commit all events of model
    }
}