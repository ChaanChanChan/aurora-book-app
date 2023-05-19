import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryFindAuthorByIdHandler } from '../handlers/library-find-author-by-id.handler';
import { LibraryAuthor } from '@api/graphql';
export declare class LibraryFindAuthorByIdResolver {
    private readonly handler;
    constructor(handler: LibraryFindAuthorByIdHandler);
    main(id: string, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthor>;
}
