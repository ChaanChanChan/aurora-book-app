import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryUpdateBooksHandler } from '../handlers/library-update-books.handler';
import { LibraryBook, LibraryUpdateBooksInput } from '@api/graphql';
export declare class LibraryUpdateBooksResolver {
    private readonly handler;
    constructor(handler: LibraryUpdateBooksHandler);
    main(payload: LibraryUpdateBooksInput, queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryBook>;
}
