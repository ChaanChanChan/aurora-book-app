import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryPaginateAuthorsHandler } from '../handlers/library-paginate-authors.handler';
export declare class LibraryPaginateAuthorsController {
    private readonly handler;
    constructor(handler: LibraryPaginateAuthorsHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<import("../../../graphql").Pagination>;
}
