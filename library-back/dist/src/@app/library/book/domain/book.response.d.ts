import { AuthorResponse } from '@app/library/author/domain/author.response';
export declare class BookResponse {
    readonly id: string;
    readonly title: string;
    readonly publishedAt: string;
    readonly price: number;
    readonly authorId: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly deletedAt: string;
    readonly author: AuthorResponse;
    constructor(id: string, title: string, publishedAt: string, price: number, authorId: string, createdAt: string, updatedAt: string, deletedAt: string, author: AuthorResponse);
}
