import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
export declare class LibraryAuthorSeeder {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: ICommandBus, queryBus: IQueryBus);
    main(): Promise<boolean>;
}
