import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
export declare class UpdateBookByIdCommand {
    readonly payload: {
        id: string;
        title?: string;
        publishedAt?: string;
        price?: number;
        authorId?: string;
    };
    readonly constraint?: QueryStatement;
    readonly cQMetadata?: CQMetadata;
    constructor(payload: {
        id: string;
        title?: string;
        publishedAt?: string;
        price?: number;
        authorId?: string;
    }, constraint?: QueryStatement, cQMetadata?: CQMetadata);
}
