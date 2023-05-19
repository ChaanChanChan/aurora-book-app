import { QueryStatement } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import { IAuthorRepository } from '../../domain/author.repository';
import { LibraryAuthor } from '../../domain/author.aggregate';
export declare class FindAuthorService {
    private readonly repository;
    constructor(repository: IAuthorRepository);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, cQMetadata?: CQMetadata): Promise<LibraryAuthor>;
}
