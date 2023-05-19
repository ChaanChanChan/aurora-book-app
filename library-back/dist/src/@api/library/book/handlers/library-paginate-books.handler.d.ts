import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { Pagination } from '@api/graphql';
export declare class LibraryPaginateBooksHandler {
    private readonly queryBus;
    constructor(queryBus: IQueryBus);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<Pagination>;
}
