import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { LibraryBook, LibraryCreateBookInput } from '@api/graphql';
import { LibraryBookDto, LibraryCreateBookDto } from '../dto';
export declare class LibraryCreateBookHandler {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: ICommandBus, queryBus: IQueryBus);
    main(payload: LibraryCreateBookInput | LibraryCreateBookDto, timezone?: string): Promise<LibraryBook | LibraryBookDto>;
}
