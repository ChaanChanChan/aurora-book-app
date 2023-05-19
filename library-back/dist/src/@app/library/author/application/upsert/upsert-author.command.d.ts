import { CQMetadata } from '@aurorajs.dev/core';
export declare class UpsertAuthorCommand {
    readonly payload: {
        id: string;
        name?: string;
    };
    readonly cQMetadata?: CQMetadata;
    constructor(payload: {
        id: string;
        name?: string;
    }, cQMetadata?: CQMetadata);
}
