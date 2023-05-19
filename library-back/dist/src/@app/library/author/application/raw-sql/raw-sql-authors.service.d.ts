import { CQMetadata } from '@aurorajs.dev/core';
import { IAuthorRepository } from '../../domain/author.repository';
import { LibraryAuthor } from '../../domain/author.aggregate';
export declare class RawSQLAuthorsService {
    private readonly repository;
    constructor(repository: IAuthorRepository);
    main(rawSQL?: string, cQMetadata?: CQMetadata): Promise<LibraryAuthor[]>;
}
