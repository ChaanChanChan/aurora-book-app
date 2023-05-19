import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { LibraryUpdateBookByIdHandler } from '../handlers/library-update-book-by-id.handler';
import { LibraryBook, LibraryUpdateBookByIdInput } from '@api/graphql';

@Resolver()
export class LibraryUpdateBookByIdResolver
{
    constructor(
        private readonly handler: LibraryUpdateBookByIdHandler,
    ) {}

    @Mutation('libraryUpdateBookById')
    async main(
        @Args('payload') payload: LibraryUpdateBookByIdInput,
        @Args('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    ): Promise<LibraryBook>
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}