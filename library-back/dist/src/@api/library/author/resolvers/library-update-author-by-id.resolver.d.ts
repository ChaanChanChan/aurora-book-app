import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryUpdateAuthorByIdHandler } from '../handlers/library-update-author-by-id.handler';
import { LibraryAuthor, LibraryUpdateAuthorByIdInput } from '@api/graphql';
export declare class LibraryUpdateAuthorByIdResolver {
    private readonly handler;
    constructor(handler: LibraryUpdateAuthorByIdHandler);
    main(payload: LibraryUpdateAuthorByIdInput, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthor>;
}
