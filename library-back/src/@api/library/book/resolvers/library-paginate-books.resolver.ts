import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { LibraryPaginateBooksHandler } from '../handlers/library-paginate-books.handler';
import { Pagination } from '@api/graphql';

@Resolver()
export class LibraryPaginateBooksResolver
{
    constructor(
        private readonly handler: LibraryPaginateBooksHandler,
    ) {}

    @Query('libraryPaginateBooks')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<Pagination>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}