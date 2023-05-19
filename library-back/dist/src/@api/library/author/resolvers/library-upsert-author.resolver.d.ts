import { LibraryUpsertAuthorHandler } from '../handlers/library-upsert-author.handler';
import { LibraryAuthor, LibraryUpdateAuthorByIdInput } from '@api/graphql';
export declare class LibraryUpsertAuthorResolver {
    private readonly handler;
    constructor(handler: LibraryUpsertAuthorHandler);
    main(payload: LibraryUpdateAuthorByIdInput, timezone?: string): Promise<LibraryAuthor>;
}
