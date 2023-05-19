import { IQueryHandler } from '@nestjs/cqrs';
import { AuthorResponse } from '../../domain/author.response';
import { FindAuthorByIdQuery } from './find-author-by-id.query';
import { FindAuthorByIdService } from './find-author-by-id.service';
export declare class FindAuthorByIdQueryHandler implements IQueryHandler<FindAuthorByIdQuery> {
    private readonly findAuthorByIdService;
    private readonly mapper;
    constructor(findAuthorByIdService: FindAuthorByIdService);
    execute(query: FindAuthorByIdQuery): Promise<AuthorResponse>;
}
