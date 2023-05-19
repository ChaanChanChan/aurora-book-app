import { LiteralObject } from '@nestjs/common';
import { IMapper, MapperOptions, CQMetadata } from '@aurorajs.dev/core';
import { LibraryBook } from './book.aggregate';
import { BookResponse } from './book.response';
export declare class BookMapper implements IMapper {
    options: MapperOptions;
    constructor(options?: MapperOptions);
    mapModelToAggregate(book: LiteralObject, cQMetadata?: CQMetadata): LibraryBook;
    mapModelsToAggregates(books: LiteralObject[], cQMetadata?: CQMetadata): LibraryBook[];
    mapAggregateToResponse(book: LibraryBook): BookResponse;
    mapAggregatesToResponses(books: LibraryBook[]): BookResponse[];
    private makeAggregate;
    private makeResponse;
}
