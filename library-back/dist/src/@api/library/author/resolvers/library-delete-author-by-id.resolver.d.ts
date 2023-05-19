import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryDeleteAuthorByIdHandler } from '../handlers/library-delete-author-by-id.handler';
import { LibraryAuthor } from '@api/graphql';
export declare class LibraryDeleteAuthorByIdResolver {
    private readonly handler;
    constructor(handler: LibraryDeleteAuthorByIdHandler);
    main(id: string, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthor>;
}
