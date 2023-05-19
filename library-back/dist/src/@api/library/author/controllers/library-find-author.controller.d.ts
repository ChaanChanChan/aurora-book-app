import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryAuthorDto } from '../dto';
import { LibraryFindAuthorHandler } from '../handlers/library-find-author.handler';
export declare class LibraryFindAuthorController {
    private readonly handler;
    constructor(handler: LibraryFindAuthorHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthorDto | import("../../../graphql").LibraryAuthor>;
}
