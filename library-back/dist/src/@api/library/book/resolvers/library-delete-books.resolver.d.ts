import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryDeleteBooksHandler } from '../handlers/library-delete-books.handler';
import { LibraryBook } from '@api/graphql';
export declare class LibraryDeleteBooksResolver {
    private readonly handler;
    constructor(handler: LibraryDeleteBooksHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryBook[]>;
}
