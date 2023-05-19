import { MockRepository } from '@aurorajs.dev/core';
import { IAuthorRepository } from '@app/library/author/domain/author.repository';
import { AuthorDeletedAt } from '@app/library/author/domain/value-objects';
import { LibraryAuthor } from '../../domain/author.aggregate';
export declare class MockAuthorRepository extends MockRepository<LibraryAuthor> implements IAuthorRepository {
    readonly repository: any;
    readonly aggregateName: string;
    collectionSource: LibraryAuthor[];
    deletedAtInstance: AuthorDeletedAt;
    constructor();
    reset(): void;
    private createSourceMockData;
}
