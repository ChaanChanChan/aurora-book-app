import { LiteralObject } from '@nestjs/common';
import { IMapper, MapperOptions, CQMetadata } from '@aurorajs.dev/core';
import { LibraryBook } from './book.aggregate';
import { BookResponse } from './book.response';
import {
    BookId,
    BookTitle,
    BookPublishedAt,
    BookPrice,
    BookAuthorId,
    BookCreatedAt,
    BookUpdatedAt,
    BookDeletedAt,
} from './value-objects';
import { AuthorMapper } from '@app/library/author/domain/author.mapper';

export class BookMapper implements IMapper
{
    constructor(
        public options: MapperOptions = { eagerLoading: true },
    ) {}

    /**
     * Map object to aggregate
     * @param book
     */
    mapModelToAggregate(book: LiteralObject, cQMetadata?: CQMetadata): LibraryBook
    {
        if (!book) return;

        return this.makeAggregate(book, cQMetadata);
    }

    /**
     * Map array of objects to array aggregates
     * @param books
     */
    mapModelsToAggregates(books: LiteralObject[], cQMetadata?: CQMetadata): LibraryBook[]
    {
        if (!Array.isArray(books)) return;

        return books.map(book => this.makeAggregate(book, cQMetadata));
    }

    /**
     * Map aggregate to response
     * @param book
     */
    mapAggregateToResponse(book: LibraryBook): BookResponse
    {
        return this.makeResponse(book);
    }

    /**
     * Map array of aggregates to array responses
     * @param books
     */
    mapAggregatesToResponses(books: LibraryBook[]): BookResponse[]
    {
        if (!Array.isArray(books)) return;

        return books.map(book => this.makeResponse(book));
    }

    private makeAggregate(book: LiteralObject, cQMetadata?: CQMetadata): LibraryBook
    {
        return LibraryBook.register(
            new BookId(book.id, { undefinable: true }),
            new BookTitle(book.title, { undefinable: true }),
            new BookPublishedAt(book.publishedAt, { undefinable: true }),
            new BookPrice(book.price, { undefinable: true }),
            new BookAuthorId(book.authorId, { undefinable: true }),
            new BookCreatedAt(book.createdAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new BookUpdatedAt(book.updatedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            new BookDeletedAt(book.deletedAt, { undefinable: true }, { addTimezone: cQMetadata?.timezone }),
            this.options.eagerLoading ? new AuthorMapper({ eagerLoading: true }).mapModelToAggregate(book.author, cQMetadata) : undefined,
        );
    }

    private makeResponse(book: LibraryBook): BookResponse
    {
        if (!book) return;

        return new BookResponse(
            book.id.value,
            book.title.value,
            book.publishedAt.value,
            book.price.value,
            book.authorId.value,
            book.createdAt.value,
            book.updatedAt.value,
            book.deletedAt.value,
            this.options.eagerLoading ? new AuthorMapper({ eagerLoading: true }).mapAggregateToResponse(book.author) : undefined,
        );
    }
}