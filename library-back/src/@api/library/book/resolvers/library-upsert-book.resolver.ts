import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';

// @app
import { LibraryUpsertBookHandler } from '../handlers/library-upsert-book.handler';
import { LibraryBook, LibraryUpdateBookByIdInput } from '@api/graphql';

@Resolver()
export class LibraryUpsertBookResolver
{
    constructor(
        private readonly handler: LibraryUpsertBookHandler,
    ) {}

    @Mutation('libraryUpsertBook')
    async main(
        @Args('payload') payload: LibraryUpdateBookByIdInput,
        @Timezone() timezone?: string,
    ): Promise<LibraryBook>
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}