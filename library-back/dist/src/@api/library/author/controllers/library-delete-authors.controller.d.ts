import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryAuthorDto } from '../dto';
import { LibraryDeleteAuthorsHandler } from '../handlers/library-delete-authors.handler';
export declare class LibraryDeleteAuthorsController {
    private readonly handler;
    constructor(handler: LibraryDeleteAuthorsHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<import("../../../graphql").LibraryAuthor[] | LibraryAuthorDto[]>;
}
