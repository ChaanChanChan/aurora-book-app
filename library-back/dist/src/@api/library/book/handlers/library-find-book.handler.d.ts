import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { LibraryBook } from '@api/graphql';
import { LibraryBookDto } from '../dto';
export declare class LibraryFindBookHandler {
    private readonly queryBus;
    constructor(queryBus: IQueryBus);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryBook | LibraryBookDto>;
}
