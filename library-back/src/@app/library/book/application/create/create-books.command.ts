import { CQMetadata } from '@aurorajs.dev/core';

export class CreateBooksCommand
{
    constructor(
        public readonly payload: {
            id: string;
            title: string;
            publishedAt: string;
            price: number;
            authorId: string;
        } [],
        public readonly cQMetadata?: CQMetadata,
    ) {}
}