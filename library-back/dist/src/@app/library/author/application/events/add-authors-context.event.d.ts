import { AggregateRoot } from '@nestjs/cqrs';
import { LibraryAuthor } from '../../domain/author.aggregate';
export declare class AddAuthorsContextEvent extends AggregateRoot {
    readonly aggregateRoots: LibraryAuthor[];
    constructor(aggregateRoots?: LibraryAuthor[]);
    [Symbol.iterator](): Generator<LibraryAuthor, void, unknown>;
    created(): void;
    updated(): void;
    deleted(): void;
}
