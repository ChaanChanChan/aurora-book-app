import { IQueryHandler } from '@nestjs/cqrs';
import { PaginationResponse } from '@aurorajs.dev/core';
import { PaginateAuthorsQuery } from './paginate-authors.query';
import { PaginateAuthorsService } from './paginate-authors.service';
export declare class PaginateAuthorsQueryHandler implements IQueryHandler<PaginateAuthorsQuery> {
    private readonly paginateAuthorsService;
    constructor(paginateAuthorsService: PaginateAuthorsService);
    execute(query: PaginateAuthorsQuery): Promise<PaginationResponse>;
}
