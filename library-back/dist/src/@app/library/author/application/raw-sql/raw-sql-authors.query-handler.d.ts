import { IQueryHandler } from '@nestjs/cqrs';
import { AuthorResponse } from '../../domain/author.response';
import { RawSQLAuthorsQuery } from './raw-sql-authors.query';
import { RawSQLAuthorsService } from './raw-sql-authors.service';
export declare class RawSQLAuthorsQueryHandler implements IQueryHandler<RawSQLAuthorsQuery> {
    private readonly rawSQLAuthorsService;
    private readonly mapper;
    constructor(rawSQLAuthorsService: RawSQLAuthorsService);
    execute(query: RawSQLAuthorsQuery): Promise<AuthorResponse[]>;
}
