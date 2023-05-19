import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryBookDto } from '../dto';
import { LibraryFindBookByIdHandler } from '../handlers/library-find-book-by-id.handler';
export declare class LibraryFindBookByIdController {
    private readonly handler;
    constructor(handler: LibraryFindBookByIdHandler);
    main(id: string, constraint?: QueryStatement, timezone?: string): Promise<import("../../../graphql").LibraryBook | LibraryBookDto>;
}
