import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import { AuthorId, AuthorName } from '../../domain/value-objects';
import { IAuthorRepository } from '../../domain/author.repository';
export declare class UpdateAuthorsService {
    private readonly publisher;
    private readonly repository;
    constructor(publisher: EventPublisher, repository: IAuthorRepository);
    main(payload: {
        id?: AuthorId;
        name?: AuthorName;
    }, queryStatement?: QueryStatement, constraint?: QueryStatement, cQMetadata?: CQMetadata): Promise<void>;
}
