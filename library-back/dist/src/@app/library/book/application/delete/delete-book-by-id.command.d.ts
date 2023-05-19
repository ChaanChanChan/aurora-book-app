import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
export declare class DeleteBookByIdCommand {
    readonly id: string;
    readonly constraint?: QueryStatement;
    readonly cQMetadata?: CQMetadata;
    constructor(id: string, constraint?: QueryStatement, cQMetadata?: CQMetadata);
}
