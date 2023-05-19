import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryBookDto } from '../dto';
import { LibraryDeleteBookByIdHandler } from '../handlers/library-delete-book-by-id.handler';
export declare class LibraryDeleteBookByIdController {
    private readonly handler;
    constructor(handler: LibraryDeleteBookByIdHandler);
    main(id: string, constraint?: QueryStatement, timezone?: string): Promise<import("../../../graphql").LibraryBook | LibraryBookDto>;
}
