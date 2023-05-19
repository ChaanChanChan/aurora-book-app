import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { LibraryUpdateBooksHandler } from '../handlers/library-update-books.handler';
import { LibraryBook, LibraryUpdateBooksInput } from '@api/graphql';

@Resolver()
export class LibraryUpdateBooksResolver
{
    constructor(
        private readonly handler: LibraryUpdateBooksHandler,
    ) {}

    @Mutation('libraryUpdateBooks')
    async main(
        @Args('payload') payload: LibraryUpdateBooksInput,
        @Args('query') queryStatement?: QueryStatement,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<LibraryBook>
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}