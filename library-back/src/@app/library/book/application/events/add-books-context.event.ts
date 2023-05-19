import { AggregateRoot } from '@nestjs/cqrs';
import { LibraryBook } from '../../domain/book.aggregate';
import { CreatedBookEvent } from './created-book.event';
import { CreatedBooksEvent } from './created-books.event';
import { UpdatedBookEvent } from './updated-book.event';
import { UpdatedBooksEvent } from './updated-books.event';
import { DeletedBookEvent } from './deleted-book.event';
import { DeletedBooksEvent } from './deleted-books.event';

export class AddBooksContextEvent extends AggregateRoot
{
    constructor(
        public readonly aggregateRoots: LibraryBook[] = [],
    )
    {
        super();
    }

    *[Symbol.iterator]()
    {
        for (const aggregateRoot of this.aggregateRoots) yield aggregateRoot;
    }

    created(): void
    {
        this.apply(
            new CreatedBooksEvent(
                this.aggregateRoots.map(book =>
                    new CreatedBookEvent(
                        book.id.value,
                        book.title.value,
                        book.publishedAt.value,
                        book.price.value,
                        book.authorId.value,
                        book.createdAt?.value,
                        book.updatedAt?.value,
                        book.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    updated(): void
    {
        this.apply(
            new UpdatedBooksEvent(
                this.aggregateRoots.map(book =>
                    new UpdatedBookEvent(
                        book.id.value,
                        book.title.value,
                        book.publishedAt.value,
                        book.price.value,
                        book.authorId.value,
                        book.createdAt?.value,
                        book.updatedAt?.value,
                        book.deletedAt?.value,
                    ),
                ),
            ),
        );
    }

    deleted(): void
    {
        this.apply(
            new DeletedBooksEvent(
                this.aggregateRoots.map(book =>
                    new DeletedBookEvent(
                        book.id.value,
                        book.title.value,
                        book.publishedAt.value,
                        book.price.value,
                        book.authorId.value,
                        book.createdAt?.value,
                        book.updatedAt?.value,
                        book.deletedAt?.value,
                    ),
                ),
            ),
        );
    }
}