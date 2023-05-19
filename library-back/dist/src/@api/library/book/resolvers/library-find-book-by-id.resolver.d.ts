import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryFindBookByIdHandler } from '../handlers/library-find-book-by-id.handler';
import { LibraryBook } from '@api/graphql';
export declare class LibraryFindBookByIdResolver {
    private readonly handler;
    constructor(handler: LibraryFindBookByIdHandler);
    main(id: string, constraint?: QueryStatement, timezone?: string): Promise<LibraryBook>;
}
