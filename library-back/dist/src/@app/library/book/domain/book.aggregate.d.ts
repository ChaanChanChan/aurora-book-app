import { LiteralObject } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { BookId, BookTitle, BookPublishedAt, BookPrice, BookAuthorId, BookCreatedAt, BookUpdatedAt, BookDeletedAt } from './value-objects';
import { LibraryAuthor } from '@app/library/author/domain/author.aggregate';
export declare class LibraryBook extends AggregateRoot {
    id: BookId;
    title: BookTitle;
    publishedAt: BookPublishedAt;
    price: BookPrice;
    authorId: BookAuthorId;
    createdAt: BookCreatedAt;
    updatedAt: BookUpdatedAt;
    deletedAt: BookDeletedAt;
    author: LibraryAuthor;
    constructor(id: BookId, title: BookTitle, publishedAt: BookPublishedAt, price: BookPrice, authorId: BookAuthorId, createdAt: BookCreatedAt, updatedAt: BookUpdatedAt, deletedAt: BookDeletedAt, author?: LibraryAuthor);
    static register(id: BookId, title: BookTitle, publishedAt: BookPublishedAt, price: BookPrice, authorId: BookAuthorId, createdAt: BookCreatedAt, updatedAt: BookUpdatedAt, deletedAt: BookDeletedAt, author?: LibraryAuthor): LibraryBook;
    created(book: LibraryBook): void;
    updated(book: LibraryBook): void;
    deleted(book: LibraryBook): void;
    toDTO(): LiteralObject;
    toRepository(): LiteralObject;
}
