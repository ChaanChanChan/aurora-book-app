/* eslint-disable key-spacing */
import { LiteralObject } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { Utils } from '@aurorajs.dev/core';
import {
    BookId,
    BookTitle,
    BookPublishedAt,
    BookPrice,
    BookAuthorId,
    BookCreatedAt,
    BookUpdatedAt,
    BookDeletedAt,
} from './value-objects';
import { CreatedBookEvent } from '../application/events/created-book.event';
import { UpdatedBookEvent } from '../application/events/updated-book.event';
import { DeletedBookEvent } from '../application/events/deleted-book.event';
import { LibraryAuthor } from '@app/library/author/domain/author.aggregate';

export class LibraryBook extends AggregateRoot
{
    id: BookId;
    title: BookTitle;
    publishedAt: BookPublishedAt;
    price: BookPrice;
    authorId: BookAuthorId;
    createdAt: BookCreatedAt;
    updatedAt: BookUpdatedAt;
    deletedAt: BookDeletedAt;

    // eager relationship
    author: LibraryAuthor;

    constructor(
        id: BookId,
        title: BookTitle,
        publishedAt: BookPublishedAt,
        price: BookPrice,
        authorId: BookAuthorId,
        createdAt: BookCreatedAt,
        updatedAt: BookUpdatedAt,
        deletedAt: BookDeletedAt,

        author?: LibraryAuthor,
    )
    {
        super();
        this.id = id;
        this.title = title;
        this.publishedAt = publishedAt;
        this.price = price;
        this.authorId = authorId;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.deletedAt = deletedAt;

        // eager relationship
        this.author = author;
    }

    static register (
        id: BookId,
        title: BookTitle,
        publishedAt: BookPublishedAt,
        price: BookPrice,
        authorId: BookAuthorId,
        createdAt: BookCreatedAt,
        updatedAt: BookUpdatedAt,
        deletedAt: BookDeletedAt,

        author?: LibraryAuthor,
    ): LibraryBook
    {
        return new LibraryBook(
            id,
            title,
            publishedAt,
            price,
            authorId,
            createdAt,
            updatedAt,
            deletedAt,

            author,
        );
    }

    created(book: LibraryBook): void
    {
        this.apply(
            new CreatedBookEvent(
                book.id.value,
                book.title.value,
                book.publishedAt.value,
                book.price.value,
                book.authorId.value,
                book.createdAt?.value,
                book.updatedAt?.value,
                book.deletedAt?.value,
            ),
        );
    }

    updated(book: LibraryBook): void
    {
        this.apply(
            new UpdatedBookEvent(
                book.id?.value,
                book.title?.value,
                book.publishedAt?.value,
                book.price?.value,
                book.authorId?.value,
                book.createdAt?.value,
                book.updatedAt?.value,
                book.deletedAt?.value,
            ),
        );
    }

    deleted(book: LibraryBook): void
    {
        this.apply(
            new DeletedBookEvent(
                book.id.value,
                book.title.value,
                book.publishedAt.value,
                book.price.value,
                book.authorId.value,
                book.createdAt?.value,
                book.updatedAt?.value,
                book.deletedAt?.value,
            ),
        );
    }

    toDTO(): LiteralObject
    {
        return {
            id: this.id.value,
            title: this.title.value,
            publishedAt: this.publishedAt.value,
            price: this.price.value,
            authorId: this.authorId.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,

            // eager relationship
            author: this.author?.toDTO(),
        };
    }

    // function called to get data for repository side effect methods
    toRepository(): LiteralObject
    {
        return {
            id: this.id.value,
            title: this.title.value,
            publishedAt: this.publishedAt.value,
            price: this.price.value,
            authorId: this.authorId.value,
            createdAt: this.createdAt?.value,
            updatedAt: this.updatedAt?.value,
            deletedAt: this.deletedAt?.value,

            // eager relationship
            author: this.author?.toDTO(),
        };
    }
}
