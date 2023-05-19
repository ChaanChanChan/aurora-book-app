import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryFindBookHandler } from '../handlers/library-find-book.handler';
import { LibraryBook } from '@api/graphql';
export declare class LibraryFindBookResolver {
    private readonly handler;
    constructor(handler: LibraryFindBookHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryBook>;
}
