import { ICommandBus, IQueryBus, QueryStatement } from '@aurorajs.dev/core';
import { LibraryAuthor } from '@api/graphql';
import { LibraryAuthorDto } from '../dto';
export declare class LibraryDeleteAuthorsHandler {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: ICommandBus, queryBus: IQueryBus);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthor[] | LibraryAuthorDto[]>;
}
