import { Model } from 'sequelize-typescript';
import { LibraryAuthorModel } from '@app/library/author/infrastructure/sequelize/sequelize-author.model';
export declare class LibraryBookModel extends Model<LibraryBookModel> {
    id: string;
    title: string;
    publishedAt: string;
    price: number;
    authorId: string;
    author: LibraryAuthorModel;
    createdAt: string;
    updatedAt: string;
    deletedAt: string;
}
