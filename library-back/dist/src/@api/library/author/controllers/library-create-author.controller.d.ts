import { LibraryAuthorDto, LibraryCreateAuthorDto } from '../dto';
import { LibraryCreateAuthorHandler } from '../handlers/library-create-author.handler';
export declare class LibraryCreateAuthorController {
    private readonly handler;
    constructor(handler: LibraryCreateAuthorHandler);
    main(payload: LibraryCreateAuthorDto, timezone?: string): Promise<LibraryAuthorDto | import("../../../graphql").LibraryAuthor>;
}
