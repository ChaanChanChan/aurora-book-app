import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';

export class UpdateBookByIdCommand
{
    constructor(
        public readonly payload: {
            id: string;
            title?: string;
            publishedAt?: string;
            price?: number;
            authorId?: string;
        },
        public readonly constraint?: QueryStatement,
        public readonly cQMetadata?: CQMetadata,
    ) {}
}