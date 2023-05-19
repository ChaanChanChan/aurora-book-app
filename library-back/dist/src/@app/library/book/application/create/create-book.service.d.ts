import { EventPublisher } from '@nestjs/cqrs';
import { CQMetadata } from '@aurorajs.dev/core';
import { IBookRepository } from '../../domain/book.repository';
import { BookAuthorId, BookId, BookPrice, BookPublishedAt, BookTitle } from '../../domain/value-objects';
export declare class CreateBookService {
    private readonly publisher;
    private readonly repository;
    constructor(publisher: EventPublisher, repository: IBookRepository);
    main(payload: {
        id: BookId;
        title: BookTitle;
        publishedAt: BookPublishedAt;
        price: BookPrice;
        authorId: BookAuthorId;
    }, cQMetadata?: CQMetadata): Promise<void>;
}
