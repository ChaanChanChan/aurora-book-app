import { LiteralObject } from '@nestjs/common';
import { CQMetadata, IRepository, Pagination, QueryStatement } from '@aurorajs.dev/core';
import { LibraryBook } from './book.aggregate';
import { BookId } from './value-objects';
export declare abstract class IBookRepository implements IRepository<LibraryBook> {
    abstract readonly repository: any;
    abstract paginate(options?: {
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<Pagination<LibraryBook>>;
    abstract find(options?: {
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<LibraryBook | null>;
    abstract findById(id: BookId, options?: {
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<LibraryBook | null>;
    abstract get(options?: {
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<LibraryBook[]>;
    abstract rawSQL(options?: {
        rawSQL?: string;
        cQMetadata?: CQMetadata;
    }): Promise<LibraryBook[]>;
    abstract count(options?: {
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<number>;
    abstract create(book: LibraryBook, options?: {
        createOptions?: LiteralObject;
        dataFactory?: (aggregate: LibraryBook) => LiteralObject;
        finderQueryStatement?: (aggregate: LibraryBook) => QueryStatement;
    }): Promise<void>;
    abstract insert(books: LibraryBook[], options?: {
        insertOptions?: LiteralObject;
        dataFactory?: (aggregate: LibraryBook) => LiteralObject;
    }): Promise<void>;
    abstract updateById(book: LibraryBook, options?: {
        updateByIdOptions?: LiteralObject;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
        dataFactory?: (aggregate: LibraryBook) => LiteralObject;
        findArguments?: LiteralObject;
    }): Promise<void>;
    abstract update(book: LibraryBook, options?: {
        updateOptions?: LiteralObject;
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
        dataFactory?: (aggregate: LibraryBook) => LiteralObject;
    }): Promise<void>;
    abstract upsert(book: LibraryBook, options?: {
        upsertOptions?: LiteralObject;
        dataFactory?: (aggregate: LibraryBook) => LiteralObject;
    }): Promise<void>;
    abstract deleteById(id: BookId, options?: {
        deleteOptions?: LiteralObject;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<void>;
    abstract delete(options?: {
        deleteOptions?: LiteralObject;
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<void>;
}
