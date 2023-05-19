import { CQMetadata } from '@aurorajs.dev/core';
export declare class CreateAuthorsCommand {
    readonly payload: {
        id: string;
        name: string;
    }[];
    readonly cQMetadata?: CQMetadata;
    constructor(payload: {
        id: string;
        name: string;
    }[], cQMetadata?: CQMetadata);
}
