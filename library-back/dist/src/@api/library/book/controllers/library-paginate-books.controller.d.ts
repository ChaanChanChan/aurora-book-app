import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryPaginateBooksHandler } from '../handlers/library-paginate-books.handler';
export declare class LibraryPaginateBooksController {
    private readonly handler;
    constructor(handler: LibraryPaginateBooksHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<import("../../../graphql").Pagination>;
}
