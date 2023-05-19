import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { LibraryAuthor } from '@api/graphql';
import { LibraryAuthorDto } from '../dto';
export declare class LibraryFindAuthorByIdHandler {
    private readonly queryBus;
    constructor(queryBus: IQueryBus);
    main(id: string, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthor | LibraryAuthorDto>;
}
