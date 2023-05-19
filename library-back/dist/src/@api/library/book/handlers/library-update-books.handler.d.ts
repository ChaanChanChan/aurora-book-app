import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { LibraryBook, LibraryUpdateBooksInput } from '@api/graphql';
import { LibraryBookDto, LibraryUpdateBooksDto } from '../dto';
export declare class LibraryUpdateBooksHandler {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: ICommandBus, queryBus: IQueryBus);
    main(payload: LibraryUpdateBooksInput | LibraryUpdateBooksDto, queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryBook | LibraryBookDto>;
}
