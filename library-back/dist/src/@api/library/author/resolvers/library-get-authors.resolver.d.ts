import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryGetAuthorsHandler } from '../handlers/library-get-authors.handler';
import { LibraryAuthor } from '@api/graphql';
export declare class LibraryGetAuthorsResolver {
    private readonly handler;
    constructor(handler: LibraryGetAuthorsHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthor[]>;
}
