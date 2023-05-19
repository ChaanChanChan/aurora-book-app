import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryDeleteBookByIdHandler } from '../handlers/library-delete-book-by-id.handler';
import { LibraryBook } from '@api/graphql';
export declare class LibraryDeleteBookByIdResolver {
    private readonly handler;
    constructor(handler: LibraryDeleteBookByIdHandler);
    main(id: string, constraint?: QueryStatement, timezone?: string): Promise<LibraryBook>;
}
