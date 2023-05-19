import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
export declare class DeleteAuthorsCommand {
    readonly queryStatement?: QueryStatement;
    readonly constraint?: QueryStatement;
    readonly cQMetadata?: CQMetadata;
    constructor(queryStatement?: QueryStatement, constraint?: QueryStatement, cQMetadata?: CQMetadata);
}
