import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { LibraryAuthor } from '@api/graphql';
import { LibraryAuthorDto } from '../dto';
export declare class LibraryGetAuthorsHandler {
    private readonly queryBus;
    constructor(queryBus: IQueryBus);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthor[] | LibraryAuthorDto[]>;
}
