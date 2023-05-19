import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { LibraryCreateBooksHandler } from '../handlers/library-create-books.handler';
import { LibraryCreateBookInput } from '@api/graphql';

@Resolver()
export class LibraryCreateBooksResolver
{
    constructor(
        private readonly handler: LibraryCreateBooksHandler,
    ) {}

    @Mutation('libraryCreateBooks')
    async main(
        @Args('payload') payload: LibraryCreateBookInput[],
        @Timezone() timezone?: string,
    ): Promise<boolean>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}