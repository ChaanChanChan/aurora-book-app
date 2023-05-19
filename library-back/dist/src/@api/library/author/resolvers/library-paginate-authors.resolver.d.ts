import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryPaginateAuthorsHandler } from '../handlers/library-paginate-authors.handler';
import { Pagination } from '@api/graphql';
export declare class LibraryPaginateAuthorsResolver {
    private readonly handler;
    constructor(handler: LibraryPaginateAuthorsHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<Pagination>;
}
