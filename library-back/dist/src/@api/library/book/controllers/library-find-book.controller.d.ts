import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryBookDto } from '../dto';
import { LibraryFindBookHandler } from '../handlers/library-find-book.handler';
export declare class LibraryFindBookController {
    private readonly handler;
    constructor(handler: LibraryFindBookHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<import("../../../graphql").LibraryBook | LibraryBookDto>;
}
