import { MockRepository } from '@aurorajs.dev/core';
import { IBookRepository } from '@app/library/book/domain/book.repository';
import { BookDeletedAt } from '@app/library/book/domain/value-objects';
import { LibraryBook } from '../../domain/book.aggregate';
export declare class MockBookRepository extends MockRepository<LibraryBook> implements IBookRepository {
    readonly repository: any;
    readonly aggregateName: string;
    collectionSource: LibraryBook[];
    deletedAtInstance: BookDeletedAt;
    constructor();
    reset(): void;
    private createSourceMockData;
}
