import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import { IBookRepository } from '../../domain/book.repository';
export declare class DeleteBooksService {
    private readonly publisher;
    private readonly repository;
    constructor(publisher: EventPublisher, repository: IBookRepository);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, cQMetadata?: CQMetadata): Promise<void>;
}
