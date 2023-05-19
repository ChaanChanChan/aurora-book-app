import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { LibraryAuthor, LibraryUpdateAuthorsInput } from '@api/graphql';
import { LibraryAuthorDto, LibraryUpdateAuthorsDto } from '../dto';
export declare class LibraryUpdateAuthorsHandler {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: ICommandBus, queryBus: IQueryBus);
    main(payload: LibraryUpdateAuthorsInput | LibraryUpdateAuthorsDto, queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthor | LibraryAuthorDto>;
}
