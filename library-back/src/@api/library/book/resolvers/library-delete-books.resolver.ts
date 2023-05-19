import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { LibraryDeleteBooksHandler } from '../handlers/library-delete-books.handler';
import { LibraryBook } from '@api/graphql';

@Resolver()
export class LibraryDeleteBooksResolver
{
    constructor(
        private readonly handler: LibraryDeleteBooksHandler,
    ) {}

    @Mutation('libraryDeleteBooks')
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