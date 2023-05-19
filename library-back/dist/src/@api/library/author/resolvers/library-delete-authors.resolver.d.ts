import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryDeleteAuthorsHandler } from '../handlers/library-delete-authors.handler';
import { LibraryAuthor } from '@api/graphql';
export declare class LibraryDeleteAuthorsResolver {
    private readonly handler;
    constructor(handler: LibraryDeleteAuthorsHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthor[]>;
}
