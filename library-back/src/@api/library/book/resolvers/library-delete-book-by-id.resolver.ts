import { Resolver, Args, Mutation } from '@nestjs/graphql';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';

// @app
import { LibraryDeleteBookByIdHandler } from '../handlers/library-delete-book-by-id.handler';
import { LibraryBook } from '@api/graphql';

@Resolver()
export class LibraryDeleteBookByIdResolver
{
    constructor(
        private readonly handler: LibraryDeleteBookByIdHandler,
    ) {}

    @Mutation('libraryDeleteBookById')
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