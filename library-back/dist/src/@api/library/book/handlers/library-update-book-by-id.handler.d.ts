import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { LibraryBook, LibraryUpdateBookByIdInput } from '@api/graphql';
import { LibraryBookDto, LibraryUpdateBookByIdDto } from '../dto';
export declare class LibraryUpdateBookByIdHandler {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: ICommandBus, queryBus: IQueryBus);
    main(payload: LibraryUpdateBookByIdInput | LibraryUpdateBookByIdDto, constraint?: QueryStatement, timezone?: string): Promise<LibraryBook | LibraryBookDto>;
}
