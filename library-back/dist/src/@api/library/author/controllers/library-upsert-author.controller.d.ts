import { LibraryAuthorDto, LibraryUpdateAuthorByIdDto } from '../dto';
import { LibraryUpsertAuthorHandler } from '../handlers/library-upsert-author.handler';
export declare class LibraryUpsertAuthorController {
    private readonly handler;
    constructor(handler: LibraryUpsertAuthorHandler);
    main(payload: LibraryUpdateAuthorByIdDto, timezone?: string): Promise<LibraryAuthorDto | import("../../../graphql").LibraryAuthor>;
}
