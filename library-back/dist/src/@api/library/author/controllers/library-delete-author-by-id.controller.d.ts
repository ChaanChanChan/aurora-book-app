import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryAuthorDto } from '../dto';
import { LibraryDeleteAuthorByIdHandler } from '../handlers/library-delete-author-by-id.handler';
export declare class LibraryDeleteAuthorByIdController {
    private readonly handler;
    constructor(handler: LibraryDeleteAuthorByIdHandler);
    main(id: string, constraint?: QueryStatement, timezone?: string): Promise<LibraryAuthorDto | import("../../../graphql").LibraryAuthor>;
}
