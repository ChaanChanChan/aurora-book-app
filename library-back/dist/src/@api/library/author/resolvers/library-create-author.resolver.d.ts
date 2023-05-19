import { LibraryCreateAuthorHandler } from '../handlers/library-create-author.handler';
import { LibraryAuthor, LibraryCreateAuthorInput } from '@api/graphql';
export declare class LibraryCreateAuthorResolver {
    private readonly handler;
    constructor(handler: LibraryCreateAuthorHandler);
    main(payload: LibraryCreateAuthorInput, timezone?: string): Promise<LibraryAuthor>;
}
