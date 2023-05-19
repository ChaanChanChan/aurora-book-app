import { LibraryCreateAuthorsHandler } from '../handlers/library-create-authors.handler';
import { LibraryCreateAuthorInput } from '@api/graphql';
export declare class LibraryCreateAuthorsResolver {
    private readonly handler;
    constructor(handler: LibraryCreateAuthorsHandler);
    main(payload: LibraryCreateAuthorInput[], timezone?: string): Promise<boolean>;
}
