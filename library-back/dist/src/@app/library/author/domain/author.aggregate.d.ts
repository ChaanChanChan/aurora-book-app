import { LiteralObject } from '@nestjs/common';
import { AggregateRoot } from '@nestjs/cqrs';
import { AuthorId, AuthorName, AuthorCreatedAt, AuthorUpdatedAt, AuthorDeletedAt } from './value-objects';
export declare class LibraryAuthor extends AggregateRoot {
    id: AuthorId;
    name: AuthorName;
    createdAt: AuthorCreatedAt;
    updatedAt: AuthorUpdatedAt;
    deletedAt: AuthorDeletedAt;
    constructor(id: AuthorId, name: AuthorName, createdAt: AuthorCreatedAt, updatedAt: AuthorUpdatedAt, deletedAt: AuthorDeletedAt);
    static register(id: AuthorId, name: AuthorName, createdAt: AuthorCreatedAt, updatedAt: AuthorUpdatedAt, deletedAt: AuthorDeletedAt): LibraryAuthor;
    created(author: LibraryAuthor): void;
    updated(author: LibraryAuthor): void;
    deleted(author: LibraryAuthor): void;
    toDTO(): LiteralObject;
    toRepository(): LiteralObject;
}
