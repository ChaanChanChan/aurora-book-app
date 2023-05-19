import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { LibraryAuthor, LibraryUpdateAuthorByIdInput } from '@api/graphql';
import { LibraryAuthorDto, LibraryUpdateAuthorByIdDto } from '../dto';
export declare class LibraryUpdateAuthorByIdHandler {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: ICommandBus, queryBus: IQueryBus);
    main(payload: LibraryUpdateAuthorByIdInput | LibraryUpdateAuthorByIdDto, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthor | LibraryAuthorDto>;
}
