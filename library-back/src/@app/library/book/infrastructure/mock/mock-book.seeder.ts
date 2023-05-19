import { Injectable } from '@nestjs/common';
import { MockSeeder } from '@aurorajs.dev/core';
import {
    BookId,
    BookTitle,
    BookPublishedAt,
    BookPrice,
    BookAuthorId,
    BookCreatedAt,
    BookUpdatedAt,
    BookDeletedAt,
} from '../../domain/value-objects';
import { LibraryBook } from '../../domain/book.aggregate';
import { books } from './mock-book.data';
import * as _ from 'lodash';

@Injectable()
export class MockBookSeeder extends MockSeeder<LibraryBook>
{
    public collectionSource: LibraryBook[];

    constructor()
    {
        super();
        this._createMockDataLang();
    }

    private _createMockDataLang(): void
    {
        this.collectionSource = [];

        for (const book of _.orderBy(books, ['id']))
        {
            this.collectionSource.push(
                LibraryBook.register(
                    new BookId(book.id),
                    new BookTitle(book.title),
                    new BookPublishedAt(book.publishedAt),
                    new BookPrice(book.price),
                    new BookAuthorId(book.authorId),
                    new BookCreatedAt({ currentTimestamp: true }),
                    new BookUpdatedAt({ currentTimestamp: true }),
                    new BookDeletedAt(null),
                ),
            );
        }
    }
}