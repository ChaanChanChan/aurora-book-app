import { EventPublisher } from '@nestjs/cqrs';
import { CQMetadata } from '@aurorajs.dev/core';
import { AuthorId, AuthorName } from '../../domain/value-objects';
import { IAuthorRepository } from '../../domain/author.repository';
export declare class CreateAuthorsService {
    private readonly publisher;
    private readonly repository;
    constructor(publisher: EventPublisher, repository: IAuthorRepository);
    main(authors: {
        id: AuthorId;
        name: AuthorName;
    }[], cQMetadata?: CQMetadata): Promise<void>;
}
