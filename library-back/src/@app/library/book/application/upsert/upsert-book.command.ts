import { CQMetadata } from '@aurorajs.dev/core';

export class UpsertBookCommand
{
    constructor(
        public readonly payload: {
            id: string;
            title?: string;
            publishedAt?: string;
            price?: number;
            authorId?: string;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}