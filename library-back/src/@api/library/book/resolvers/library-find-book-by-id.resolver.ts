import { Resolver, Args, Query } from '@nestjs/graphql';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { LibraryFindBookByIdHandler } from '../handlers/library-find-book-by-id.handler';
import { LibraryBook } from '@api/graphql';

@Resolver()
export class LibraryFindBookByIdResolver
{
    constructor(
        private readonly handler: LibraryFindBookByIdHandler,
    ) {}

    @Query('libraryFindBookById')
    async main(
        @Args('id') id: string,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<LibraryBook>
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}