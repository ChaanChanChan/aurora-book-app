import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryAuthorDto } from '../dto';
import { LibraryGetAuthorsHandler } from '../handlers/library-get-authors.handler';
export declare class LibraryGetAuthorsController {
    private readonly handler;
    constructor(handler: LibraryGetAuthorsHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<import("../../../graphql").LibraryAuthor[] | LibraryAuthorDto[]>;
}
