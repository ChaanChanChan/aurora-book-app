import { LibraryCreateAuthorDto } from '../dto';
import { LibraryCreateAuthorsHandler } from '../handlers/library-create-authors.handler';
export declare class LibraryCreateAuthorsController {
    private readonly handler;
    constructor(handler: LibraryCreateAuthorsHandler);
    main(payload: LibraryCreateAuthorDto[], timezone?: string): Promise<boolean>;
}
