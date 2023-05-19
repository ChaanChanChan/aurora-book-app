import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryUpdateBookByIdHandler } from '../handlers/library-update-book-by-id.handler';
import { LibraryBook, LibraryUpdateBookByIdInput } from '@api/graphql';
export declare class LibraryUpdateBookByIdResolver {
    private readonly handler;
    constructor(handler: LibraryUpdateBookByIdHandler);
    main(payload: LibraryUpdateBookByIdInput, constraint?: QueryStatement, timezone?: string): Promise<LibraryBook>;
}
