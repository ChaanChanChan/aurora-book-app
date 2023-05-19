import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryPaginateBooksHandler } from '../handlers/library-paginate-books.handler';
import { Pagination } from '@api/graphql';
export declare class LibraryPaginateBooksResolver {
    private readonly handler;
    constructor(handler: LibraryPaginateBooksHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<Pagination>;
}
