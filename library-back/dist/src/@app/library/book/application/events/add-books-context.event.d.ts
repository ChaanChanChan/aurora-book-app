import { AggregateRoot } from '@nestjs/cqrs';
import { LibraryBook } from '../../domain/book.aggregate';
export declare class AddBooksContextEvent extends AggregateRoot {
    readonly aggregateRoots: LibraryBook[];
    constructor(aggregateRoots?: LibraryBook[]);
    [Symbol.iterator](): Generator<LibraryBook, void, unknown>;
    created(): void;
    updated(): void;
    deleted(): void;
}
