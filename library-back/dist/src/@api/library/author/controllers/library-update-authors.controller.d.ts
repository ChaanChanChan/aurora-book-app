import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryAuthorDto, LibraryUpdateAuthorsDto } from '../dto';
import { LibraryUpdateAuthorsHandler } from '../handlers/library-update-authors.handler';
export declare class LibraryUpdateAuthorsController {
    private readonly handler;
    constructor(handler: LibraryUpdateAuthorsHandler);
    main(payload: LibraryUpdateAuthorsDto, queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthorDto | import("../../../graphql").LibraryAuthor>;
}
