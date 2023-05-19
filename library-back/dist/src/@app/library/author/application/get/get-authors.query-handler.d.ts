import { IQueryHandler } from '@nestjs/cqrs';
import { AuthorResponse } from '../../domain/author.response';
import { GetAuthorsQuery } from './get-authors.query';
import { GetAuthorsService } from './get-authors.service';
export declare class GetAuthorsQueryHandler implements IQueryHandler<GetAuthorsQuery> {
    private readonly getAuthorsService;
    private readonly mapper;
    constructor(getAuthorsService: GetAuthorsService);
    execute(query: GetAuthorsQuery): Promise<AuthorResponse[]>;
}
