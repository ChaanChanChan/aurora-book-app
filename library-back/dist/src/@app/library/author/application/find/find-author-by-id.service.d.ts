import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { IAuthorRepository } from '../../domain/author.repository';
import { LibraryAuthor } from '../../domain/author.aggregate';
import { AuthorId } from '../../domain/value-objects';
export declare class FindAuthorByIdService {
    private readonly repository;
    constructor(repository: IAuthorRepository);
    main(id: AuthorId, constraint?: QueryStatement, cQMetadata?: CQMetadata): Promise<LibraryAuthor>;
}
