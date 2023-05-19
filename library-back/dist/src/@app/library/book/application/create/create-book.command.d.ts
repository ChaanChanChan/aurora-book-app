import { CQMetadata } from '@aurorajs.dev/core';
export declare class CreateBookCommand {
    readonly payload: {
        id: string;
        title: string;
        publishedAt: string;
        price: number;
        authorId: string;
    };
    readonly cQMetadata?: CQMetadata;
    constructor(payload: {
        id: string;
        title: string;
        publishedAt: string;
        price: number;
        authorId: string;
    }, cQMetadata?: CQMetadata);
}
