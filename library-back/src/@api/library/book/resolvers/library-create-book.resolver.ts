import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { LibraryCreateBookHandler } from '../handlers/library-create-book.handler';
import { LibraryBook, LibraryCreateBookInput } from '@api/graphql';

@Resolver()
export class LibraryCreateBookResolver
{
    constructor(
        private readonly handler: LibraryCreateBookHandler,
    ) {}

    @Mutation('libraryCreateBook')
    async main(
        @Args('payload') payload: LibraryCreateBookInput,
        @Timezone() timezone?: string,
    ): Promise<LibraryBook>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}