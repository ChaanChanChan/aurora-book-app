import { LibraryCreateBookHandler } from '../handlers/library-create-book.handler';
import { LibraryBook, LibraryCreateBookInput } from '@api/graphql';
export declare class LibraryCreateBookResolver {
    private readonly handler;
    constructor(handler: LibraryCreateBookHandler);
    main(payload: LibraryCreateBookInput, timezone?: string): Promise<LibraryBook>;
}
