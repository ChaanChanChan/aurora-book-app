import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { LibraryBook, LibraryUpdateBookByIdInput } from '@api/graphql';
import { LibraryBookDto, LibraryUpdateBookByIdDto } from '../dto';
export declare class LibraryUpsertBookHandler {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: ICommandBus, queryBus: IQueryBus);
    main(payload: LibraryUpdateBookByIdInput | LibraryUpdateBookByIdDto, timezone?: string): Promise<LibraryBook | LibraryBookDto>;
}
