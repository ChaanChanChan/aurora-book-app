import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryUpdateAuthorsHandler } from '../handlers/library-update-authors.handler';
import { LibraryAuthor, LibraryUpdateAuthorsInput } from '@api/graphql';
export declare class LibraryUpdateAuthorsResolver {
    private readonly handler;
    constructor(handler: LibraryUpdateAuthorsHandler);
    main(payload: LibraryUpdateAuthorsInput, queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthor>;
}
