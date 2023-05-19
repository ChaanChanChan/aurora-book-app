import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { LibraryBook } from '@api/graphql';
import { LibraryBookDto } from '../dto';
export declare class LibraryDeleteBooksHandler {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: ICommandBus, queryBus: IQueryBus);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryBook[] | LibraryBookDto[]>;
}
