import { LibraryCreateBookDto } from '../dto';
import { LibraryCreateBooksHandler } from '../handlers/library-create-books.handler';
export declare class LibraryCreateBooksController {
    private readonly handler;
    constructor(handler: LibraryCreateBooksHandler);
    main(payload: LibraryCreateBookDto[], timezone?: string): Promise<boolean>;
}
