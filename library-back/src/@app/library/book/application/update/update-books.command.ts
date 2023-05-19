import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';

export class UpdateBooksCommand
{
    constructor(
        public readonly payload: {
            id?: string;
            title?: string;
            publishedAt?: string;
            price?: number;
            authorId?: string;
        },
        public readonly queryStatement?: QueryStatement,
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}