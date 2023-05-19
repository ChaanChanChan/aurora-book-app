import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import { BookId } from '../../domain/value-objects';
import { IBookRepository } from '../../domain/book.repository';
export declare class DeleteBookByIdService {
    private readonly publisher;
    private readonly repository;
    constructor(publisher: EventPublisher, repository: IBookRepository);
    main(id: BookId, constraint?: QueryStatement, cQMetadata?: CQMetadata): Promise<void>;
}
