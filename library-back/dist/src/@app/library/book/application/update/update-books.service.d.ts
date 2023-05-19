import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import { BookId, BookTitle, BookPublishedAt, BookPrice, BookAuthorId } from '../../domain/value-objects';
import { IBookRepository } from '../../domain/book.repository';
export declare class UpdateBooksService {
    private readonly publisher;
    private readonly repository;
    constructor(publisher: EventPublisher, repository: IBookRepository);
    main(payload: {
        id?: BookId;
        title?: BookTitle;
        publishedAt?: BookPublishedAt;
        price?: BookPrice;
        authorId?: BookAuthorId;
    }, queryStatement?: QueryStatement, constraint?: QueryStatement, cQMetadata?: CQMetadata): Promise<void>;
}
