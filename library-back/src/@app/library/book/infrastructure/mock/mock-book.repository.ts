import { Injectable } from '@nestjs/common';
import { MockRepository, Utils } from '@aurorajs.dev/core';
import { IBookRepository } from '@app/library/book/domain/book.repository';
import {
    BookId,
    BookTitle,
    BookPublishedAt,
    BookPrice,
    BookAuthorId,
    BookCreatedAt,
    BookUpdatedAt,
    BookDeletedAt,
} from '@app/library/book/domain/value-objects';
import { LibraryBook } from '../../domain/book.aggregate';
import { books } from './mock-book.data';

@Injectable()
export class MockBookRepository extends MockRepository<LibraryBook> implements IBookRepository
{
    public readonly repository: any;
    public readonly aggregateName: string = 'LibraryBook';
    public collectionSource: LibraryBook[];
    public deletedAtInstance: BookDeletedAt = new BookDeletedAt(null);

    constructor()
    {
        super();
        this.createSourceMockData();
    }

    public reset(): void
    {
        this.createSourceMockData();
    }

    private createSourceMockData(): void
    {
        this.collectionSource = [];
        const now = Utils.nowTimestamp();

        for (const itemCollection of <any[]>books)
        {
            itemCollection['createdAt'] = now;
            itemCollection['updatedAt'] = now;
            itemCollection['deletedAt'] = null;

            this.collectionSource.push(LibraryBook.register(
                new BookId(itemCollection.id),
                new BookTitle(itemCollection.title),
                new BookPublishedAt(itemCollection.publishedAt),
                new BookPrice(itemCollection.price),
                new BookAuthorId(itemCollection.authorId),
                new BookCreatedAt(itemCollection.createdAt),
                new BookUpdatedAt(itemCollection.updatedAt),
                new BookDeletedAt(itemCollection.deletedAt),
            ));
        }
    }
}