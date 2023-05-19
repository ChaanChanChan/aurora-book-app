import { ICommandBus } from '@aurorajs.dev/core';
import { LibraryCreateBookInput } from '@api/graphql';
import { LibraryCreateBookDto } from '../dto';
export declare class LibraryCreateBooksHandler {
    private readonly commandBus;
    constructor(commandBus: ICommandBus);
    main(payload: LibraryCreateBookInput[] | LibraryCreateBookDto[], timezone?: string): Promise<boolean>;
}
