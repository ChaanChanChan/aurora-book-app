import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { IBookRepository } from '../../domain/book.repository';
import { LibraryBook } from '../../domain/book.aggregate';
import { BookId } from '../../domain/value-objects';
export declare class FindBookByIdService {
    private readonly repository;
    constructor(repository: IBookRepository);
    main(id: BookId, constraint?: QueryStatement, cQMetadata?: CQMetadata): Promise<LibraryBook>;
}
