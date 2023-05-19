import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryBookDto, LibraryUpdateBooksDto } from '../dto';
import { LibraryUpdateBooksHandler } from '../handlers/library-update-books.handler';
export declare class LibraryUpdateBooksController {
    private readonly handler;
    constructor(handler: LibraryUpdateBooksHandler);
    main(payload: LibraryUpdateBooksDto, queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<import("../../../graphql").LibraryBook | LibraryBookDto>;
}
