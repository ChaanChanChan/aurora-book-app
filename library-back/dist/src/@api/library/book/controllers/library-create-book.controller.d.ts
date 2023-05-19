import { LibraryBookDto, LibraryCreateBookDto } from '../dto';
import { LibraryCreateBookHandler } from '../handlers/library-create-book.handler';
export declare class LibraryCreateBookController {
    private readonly handler;
    constructor(handler: LibraryCreateBookHandler);
    main(payload: LibraryCreateBookDto, timezone?: string): Promise<import("../../../graphql").LibraryBook | LibraryBookDto>;
}
