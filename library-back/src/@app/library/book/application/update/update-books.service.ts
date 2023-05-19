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
import { AddBooksContextEvent } from '../events/add-books-context.event';

@Injectable()
export class UpdateBooksService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IBookRepository,
    ) {}

    async main(
        payload: {
            id?: BookId;
            title?: BookTitle;
            publishedAt?: BookPublishedAt;
            price?: BookPrice;
            authorId?: BookAuthorId;
        },
        queryStatement?: QueryStatement,
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


        // update
        await this.repository.update(book, {
            queryStatement,
            constraint,
            cQMetadata,
            updateOptions: cQMetadata?.repositoryOptions,
        });

        // get objects to delete
        const books = await this.repository.get({
            queryStatement,
            constraint,
            cQMetadata,
        });

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const booksRegister = this.publisher.mergeObjectContext(
            new AddBooksContextEvent(books),
        );

        booksRegister.updated(); // apply event to model events
        booksRegister.commit(); // commit all events of model
    }
}