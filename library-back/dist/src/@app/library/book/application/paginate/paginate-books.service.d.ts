import { QueryStatement } from '@aurorajs.dev/core';
import { Pagination } from '@aurorajs.dev/core';
import { CQMetadata } from '@aurorajs.dev/core';
import { IBookRepository } from '../../domain/book.repository';
import { LibraryBook } from '../../domain/book.aggregate';
export declare class PaginateBooksService {
    private readonly repository;
    constructor(repository: IBookRepository);
    main(queryStatement?: QueryStatement, constraint?: QueryStatement, cQMetadata?: CQMetadata): Promise<Pagination<LibraryBook>>;
}
