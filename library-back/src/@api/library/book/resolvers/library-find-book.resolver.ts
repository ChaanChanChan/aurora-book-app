import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { LibraryFindBookHandler } from '../handlers/library-find-book.handler';
import { LibraryBook } from '@api/graphql';

@Resolver()
export class LibraryFindBookResolver
{
    constructor(
        private readonly handler: LibraryFindBookHandler,
    ) {}

    @Query('libraryFindBook')
    async main(
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<LibraryBook>
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}