import { CQMetadata } from '@aurorajs.dev/core';

export class CreateBookCommand
{
    constructor(
        public readonly payload: {
            id: string;
            title: string;
            publishedAt: string;
            price: number;
            authorId: string;
        },
        public readonly cQMetadata?: CQMetadata,
    ) {}
}