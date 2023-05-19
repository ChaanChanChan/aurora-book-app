import { LibraryAuthorDto } from '../../../library/author/dto/library-author.dto';
export declare class LibraryBookDto {
    id: string;
    title: string;
    publishedAt: string;
    price: number;
    authorId: string;
    author?: LibraryAuthorDto;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}
