import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryAuthorDto, LibraryUpdateAuthorByIdDto } from '../dto';
import { LibraryUpdateAuthorByIdHandler } from '../handlers/library-update-author-by-id.handler';
export declare class LibraryUpdateAuthorByIdController {
    private readonly handler;
    constructor(handler: LibraryUpdateAuthorByIdHandler);
    main(payload: LibraryUpdateAuthorByIdDto, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthorDto | import("../../../graphql").LibraryAuthor>;
}
