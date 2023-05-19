import { EventPublisher } from '@nestjs/cqrs';
import { CQMetadata } from '@aurorajs.dev/core';
import { IAuthorRepository } from '../../domain/author.repository';
import { AuthorId, AuthorName } from '../../domain/value-objects';
export declare class CreateAuthorService {
    private readonly publisher;
    private readonly repository;
    constructor(publisher: EventPublisher, repository: IAuthorRepository);
    main(payload: {
        id: AuthorId;
        name: AuthorName;
    }, cQMetadata?: CQMetadata): Promise<void>;
}
