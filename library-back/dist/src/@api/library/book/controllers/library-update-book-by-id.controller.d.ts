import { QueryStatement } from '@aurorajs.dev/core';
import { LibraryBookDto, LibraryUpdateBookByIdDto } from '../dto';
import { LibraryUpdateBookByIdHandler } from '../handlers/library-update-book-by-id.handler';
export declare class LibraryUpdateBookByIdController {
    private readonly handler;
    constructor(handler: LibraryUpdateBookByIdHandler);
    main(payload: LibraryUpdateBookByIdDto, constraint?: QueryStatement, timezone?: string): Promise<import("../../../graphql").LibraryBook | LibraryBookDto>;
}
