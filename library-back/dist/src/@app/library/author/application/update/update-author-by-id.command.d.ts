import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
export declare class UpdateAuthorByIdCommand {
    readonly payload: {
        id: string;
        name?: string;
    };
    readonly constraint?: QueryStatement;
    readonly cQMetadata?: CQMetadata;
    constructor(payload: {
        id: string;
        name?: string;
    }, constraint?: QueryStatement, cQMetadata?: CQMetadata);
}
