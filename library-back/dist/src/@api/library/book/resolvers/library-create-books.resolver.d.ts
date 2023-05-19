import { LibraryCreateBooksHandler } from '../handlers/library-create-books.handler';
import { LibraryCreateBookInput } from '@api/graphql';
export declare class LibraryCreateBooksResolver {
    private readonly handler;
    constructor(handler: LibraryCreateBooksHandler);
    main(payload: LibraryCreateBookInput[], timezone?: string): Promise<boolean>;
}
