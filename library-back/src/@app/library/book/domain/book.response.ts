import { AuthorResponse } from '@app/library/author/domain/author.response';

export class BookResponse
{
    constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly publishedAt: string,
        public readonly price: number,
        public readonly authorId: string,
        public readonly createdAt: string,
        public readonly updatedAt: string,
        public readonly deletedAt: string,
        public readonly author: AuthorResponse,
    ) {}
}