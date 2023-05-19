import { IQueryHandler } from '@nestjs/cqrs';
import { AuthorResponse } from '../../domain/author.response';
import { FindAuthorQuery } from './find-author.query';
import { FindAuthorService } from './find-author.service';
export declare class FindAuthorQueryHandler implements IQueryHandler<FindAuthorQuery> {
    private readonly findAuthorService;
    private readonly mapper;
    constructor(findAuthorService: FindAuthorService);
    execute(query: FindAuthorQuery): Promise<AuthorResponse>;
}
