import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { LibraryGetBooksHandler } from '../handlers/library-get-books.handler';
import { LibraryBook } from '@api/graphql';

@Resolver()
export class LibraryGetBooksResolver
{
    constructor(
        private readonly handler: LibraryGetBooksHandler,
    ) {}

    @Query('libraryGetBooks')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<LibraryBook[]>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}