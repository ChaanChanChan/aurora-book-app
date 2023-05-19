import { LibraryUpsertBookHandler } from '../handlers/library-upsert-book.handler';
import { LibraryBook, LibraryUpdateBookByIdInput } from '@api/graphql';
export declare class LibraryUpsertBookResolver {
    private readonly handler;
    constructor(handler: LibraryUpsertBookHandler);
    main(payload: LibraryUpdateBookByIdInput, timezone?: string): Promise<LibraryBook>;
}
