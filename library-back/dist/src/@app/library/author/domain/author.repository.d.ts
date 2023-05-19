import { LiteralObject } from '@nestjs/common';
import { CQMetadata, IRepository, Pagination, QueryStatement } from '@aurorajs.dev/core';
import { LibraryAuthor } from './author.aggregate';
import { AuthorId } from './value-objects';
export declare abstract class IAuthorRepository implements IRepository<LibraryAuthor> {
    abstract readonly repository: any;
    abstract paginate(options?: {
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<Pagination<LibraryAuthor>>;
    abstract find(options?: {
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<LibraryAuthor | null>;
    abstract findById(id: AuthorId, options?: {
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<LibraryAuthor | null>;
    abstract get(options?: {
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<LibraryAuthor[]>;
    abstract rawSQL(options?: {
        rawSQL?: string;
        cQMetadata?: CQMetadata;
    }): Promise<LibraryAuthor[]>;
    abstract count(options?: {
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
    }): Promise<number>;
    abstract create(author: LibraryAuthor, options?: {
        createOptions?: LiteralObject;
        dataFactory?: (aggregate: LibraryAuthor) => LiteralObject;
        finderQueryStatement?: (aggregate: LibraryAuthor) => QueryStatement;
    }): Promise<void>;
    abstract insert(authors: LibraryAuthor[], options?: {
        insertOptions?: LiteralObject;
        dataFactory?: (aggregate: LibraryAuthor) => LiteralObject;
    }): Promise<void>;
    abstract updateById(author: LibraryAuthor, options?: {
        updateByIdOptions?: LiteralObject;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
        dataFactory?: (aggregate: LibraryAuthor) => LiteralObject;
        findArguments?: LiteralObject;
    }): Promise<void>;
    abstract update(author: LibraryAuthor, options?: {
        updateOptions?: LiteralObject;
        queryStatement?: QueryStatement;
        constraint?: QueryStatement;
        cQMetadata?: CQMetadata;
        dataFactory?: (aggregate: LibraryAuthor) => LiteralObject;
    }): Promise<void>;
    abstract upsert(author: LibraryAuthor, options?: {
        upsertOptions?: LiteralObject;
        dataFactory?: (aggregate: LibraryAuthor) => LiteralObject;
    }): Promise<void>;
    abstract deleteById(id: AuthorId, options?: {
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
