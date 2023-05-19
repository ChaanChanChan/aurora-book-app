import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { LibraryAuthor } from '@api/graphql';
import { LibraryAuthorDto } from '../dto';
export declare class LibraryDeleteAuthorByIdHandler {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: ICommandBus, queryBus: IQueryBus);
    main(id: string, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthor | LibraryAuthorDto>;
}
