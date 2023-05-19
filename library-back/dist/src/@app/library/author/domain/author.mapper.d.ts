import { LiteralObject } from '@nestjs/common';
import { IMapper, MapperOptions, CQMetadata } from '@aurorajs.dev/core';
import { LibraryAuthor } from './author.aggregate';
import { AuthorResponse } from './author.response';
export declare class AuthorMapper implements IMapper {
    options: MapperOptions;
    constructor(options?: MapperOptions);
    mapModelToAggregate(author: LiteralObject, cQMetadata?: CQMetadata): LibraryAuthor;
    mapModelsToAggregates(authors: LiteralObject[], cQMetadata?: CQMetadata): LibraryAuthor[];
    mapAggregateToResponse(author: LibraryAuthor): AuthorResponse;
    mapAggregatesToResponses(authors: LibraryAuthor[]): AuthorResponse[];
    private makeAggregate;
    private makeResponse;
}
