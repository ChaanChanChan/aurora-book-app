import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import { AuthorId, AuthorName } from '../../domain/value-objects';
import { IAuthorRepository } from '../../domain/author.repository';
export declare class UpdateAuthorByIdService {
    private readonly publisher;
    private readonly repository;
    constructor(publisher: EventPublisher, repository: IAuthorRepository);
    main(payload: {
        id: AuthorId;
        name?: AuthorName;
    }, constraint?: QueryStatement, cQMetadata?: CQMetadata): Promise<void>;
}
