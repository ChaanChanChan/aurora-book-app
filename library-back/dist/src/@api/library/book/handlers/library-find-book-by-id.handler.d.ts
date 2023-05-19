import { IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { LibraryBook } from '@api/graphql';
import { LibraryBookDto } from '../dto';
export declare class LibraryFindBookByIdHandler {
    private readonly queryBus;
    constructor(queryBus: IQueryBus);
    main(id: string, constraint?: QueryStatement, timezone?: string): Promise<LibraryBook | LibraryBookDto>;
}
