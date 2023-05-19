import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import { AuthorId } from '../../domain/value-objects';
import { IAuthorRepository } from '../../domain/author.repository';
export declare class DeleteAuthorByIdService {
    private readonly publisher;
    private readonly repository;
    constructor(publisher: EventPublisher, repository: IAuthorRepository);
    main(id: AuthorId, constraint?: QueryStatement, cQMetadata?: CQMetadata): Promise<void>;
}
