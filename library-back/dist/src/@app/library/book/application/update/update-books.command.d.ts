import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
export declare class UpdateBooksCommand {
    readonly payload: {
        id?: string;
        title?: string;
        publishedAt?: string;
        price?: number;
        authorId?: string;
    };
    readonly queryStatement?: QueryStatement;
    readonly constraint?: QueryStatement;
    readonly cQMetadata?: CQMetadata;
    constructor(payload: {
        id?: string;
        title?: string;
        publishedAt?: string;
        price?: number;
        authorId?: string;
    }, queryStatement?: QueryStatement, constraint?: QueryStatement, cQMetadata?: CQMetadata);
}
