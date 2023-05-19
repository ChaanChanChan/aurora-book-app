import { Injectable } from '@nestjs/common';
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
import { AddBooksContextEvent } from '../events/add-books-context.event';

@Injectable()
export class CreateBooksService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IBookRepository,
    ) {}

    async main(
        books: {
            id: BookId;
            title: BookTitle;
            publishedAt: BookPublishedAt;
            price: BookPrice;
            authorId: BookAuthorId;
        } [],
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const aggregateBooks = books.map(book => LibraryBook.register(
            book.id,
            book.title,
            book.publishedAt,
            book.price,
            book.authorId,
            new BookCreatedAt({ currentTimestamp: true }),
            new BookUpdatedAt({ currentTimestamp: true }),
            null, // deleteAt
        ));

        // insert
        await this.repository.insert(aggregateBooks, { insertOptions: cQMetadata?.repositoryOptions });

        // create AddBooksContextEvent to have object wrapper to add event publisher functionality
        // insert EventBus in object, to be able to apply and commit events
        const booksRegistered = this.publisher.mergeObjectContext(new AddBooksContextEvent(aggregateBooks));

        booksRegistered.created(); // apply event to model events
        booksRegistered.commit(); // commit all events of model
    }
}