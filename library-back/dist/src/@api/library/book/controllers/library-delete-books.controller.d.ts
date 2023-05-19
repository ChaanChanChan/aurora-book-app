import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryBookDto } from '../dto';
import { LibraryDeleteBooksHandler } from '../handlers/library-delete-books.handler';
export declare class LibraryDeleteBooksController {
    private readonly handler;
    constructor(handler: LibraryDeleteBooksHandler);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, timezone?: string): Promise<import("../../../graphql").LibraryBook[] | LibraryBookDto[]>;
}
