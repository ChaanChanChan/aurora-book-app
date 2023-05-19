import { ICommandBus, IQueryBus } from '@aurorajs.dev/core';
export declare class LibrarySeeder {
    private readonly commandBus;
    private readonly queryBus;
    constructor(commandBus: ICommandBus, queryBus: IQueryBus);
    main(): Promise<boolean>;
}
