import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
import { LibraryAuthor, LibraryCreateAuthorInput } from '@api/graphql';
import { LibraryAuthorDto, LibraryCreateAuthorDto } from '../dto';
export declare class LibraryCreateAuthorHandler {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: ICommandBus, queryBus: IQueryBus);
    main(payload: LibraryCreateAuthorInput | LibraryCreateAuthorDto, timezone?: string): Promise<LibraryAuthor | LibraryAuthorDto>;
}
