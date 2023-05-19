import { ICommandBus } from '@aurorajs.dev/core';
import { LibraryCreateAuthorInput } from '@api/graphql';
import { LibraryCreateAuthorDto } from '../dto';
export declare class LibraryCreateAuthorsHandler {
    private readonly commandBus;
    constructor(commandBus: ICommandBus);
    main(payload: LibraryCreateAuthorInput[] | LibraryCreateAuthorDto[], timezone?: string): Promise<boolean>;
}
