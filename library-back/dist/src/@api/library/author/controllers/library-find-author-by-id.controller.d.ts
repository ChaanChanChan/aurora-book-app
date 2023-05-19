import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryAuthorDto } from '../dto';
import { LibraryFindAuthorByIdHandler } from '../handlers/library-find-author-by-id.handler';
export declare class LibraryFindAuthorByIdController {
    private readonly handler;
    constructor(handler: LibraryFindAuthorByIdHandler);
    main(id: string, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthorDto | import("../../../graphql").LibraryAuthor>;
}
