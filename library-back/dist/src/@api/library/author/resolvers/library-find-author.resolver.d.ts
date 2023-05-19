import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryFindAuthorHandler } from '../handlers/library-find-author.handler';
import { LibraryAuthor } from '@api/graphql';
export declare class LibraryFindAuthorResolver {
    private readonly handler;
    constructor(handler: LibraryFindAuthorHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthor>;
}
