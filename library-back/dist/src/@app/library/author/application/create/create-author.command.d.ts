import { CQMetadata } from '@aurorajs.dev/core';
export declare class CreateAuthorCommand {
    readonly payload: {
        id: string;
        name: string;
    };
    readonly cQMetadata?: CQMetadata;
    constructor(payload: {
        id: string;
        name: string;
    }, cQMetadata?: CQMetadata);
}
