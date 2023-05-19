import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryBookDto } from '../dto';
import { LibraryGetBooksHandler } from '../handlers/library-get-books.handler';
export declare class LibraryGetBooksController {
    private readonly handler;
    constructor(handler: LibraryGetBooksHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<import("../../../graphql").LibraryBook[] | LibraryBookDto[]>;
}
