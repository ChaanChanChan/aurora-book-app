import { EventPublisher } from '@nestjs/cqrs';
import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import { IAuthorRepository } from '../../domain/author.repository';
export declare class DeleteAuthorsService {
    private readonly publisher;
    private readonly repository;
    constructor(publisher: EventPublisher, repository: IAuthorRepository);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, cQMetadata?: CQMetadata): Promise<void>;
}
