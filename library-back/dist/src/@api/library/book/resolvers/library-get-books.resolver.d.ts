import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryGetBooksHandler } from '../handlers/library-get-books.handler';
import { LibraryBook } from '@api/graphql';
export declare class LibraryGetBooksResolver {
    private readonly handler;
    constructor(handler: LibraryGetBooksHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryBook[]>;
}
