import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { LibraryAuthor, LibraryUpdateAuthorByIdInput } from '@api/graphql';
import { LibraryAuthorDto, LibraryUpdateAuthorByIdDto } from '../dto';
export declare class LibraryUpsertAuthorHandler {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: ICommandBus, queryBus: IQueryBus);
    main(payload: LibraryUpdateAuthorByIdInput | LibraryUpdateAuthorByIdDto, timezone?: string): Promise<LibraryAuthor | LibraryAuthorDto>;
}
