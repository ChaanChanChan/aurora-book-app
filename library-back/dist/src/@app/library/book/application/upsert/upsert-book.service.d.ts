import { EventPublisher } from '@nestjs/cqrs';
import { CQMetadata } from '@aurorajs.dev/core';
import { BookId, BookTitle, BookPublishedAt, BookPrice, BookAuthorId } from '../../domain/value-objects';
import { IBookRepository } from '../../domain/book.repository';
export declare class UpsertBookService {
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
