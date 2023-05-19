import { CQMetadata } from '@aurorajs.dev/core';
import { IBookRepository } from '../../domain/book.repository';
import { LibraryBook } from '../../domain/book.aggregate';
export declare class RawSQLBooksService {
    private readonly repository;
    constructor(repository: IBookRepository);
    main(rawSQL?: string, cQMetadata?: CQMetadata): Promise<LibraryBook[]>;
}
