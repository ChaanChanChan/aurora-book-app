/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Delete, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { LibraryAuthorDto } from '../dto';

// @app
import { LibraryDeleteAuthorsHandler } from '../handlers/library-delete-authors.handler';

@ApiTags('[library] author')
@Controller('library/authors/delete')
export class LibraryDeleteAuthorsController
{
    constructor(
        private readonly handler: LibraryDeleteAuthorsHandler,
    ) {}

    @Delete()
    @ApiOperation({ summary: 'Delete authors in batch according to query' })
    @ApiOkResponse({ description: 'The records has been deleted successfully.', type: [LibraryAuthorDto]})
    @ApiBody({ type: QueryStatement })
    @ApiQuery({ name: 'query', type: QueryStatement })
    async main(
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            queryStatement,
            constraint,
            timezone,
        );
    }
}