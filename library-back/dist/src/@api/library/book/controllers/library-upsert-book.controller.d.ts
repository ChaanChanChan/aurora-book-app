import { LibraryBookDto, LibraryUpdateBookByIdDto } from '../dto';
import { LibraryUpsertBookHandler } from '../handlers/library-upsert-book.handler';
export declare class LibraryUpsertBookController {
    private readonly handler;
    constructor(handler: LibraryUpsertBookHandler);
    main(payload: LibraryUpdateBookByIdDto, timezone?: string): Promise<import("../../../graphql").LibraryBook | LibraryBookDto>;
}
