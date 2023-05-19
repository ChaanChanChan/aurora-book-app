import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
export declare class UpdateAuthorsCommand {
    readonly payload: {
        id?: string;
        name?: string;
    };
    readonly queryStatement?: QueryStatement;
    readonly constraint?: QueryStatement;
    readonly cQMetadata?: CQMetadata;
    constructor(payload: {
        id?: string;
        name?: string;
    }, queryStatement?: QueryStatement, constraint?: QueryStatement, cQMetadata?: CQMetadata);
}
