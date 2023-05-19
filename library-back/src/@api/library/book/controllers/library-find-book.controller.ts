/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { LibraryBookDto } from '../dto';

// @app
import { LibraryFindBookHandler } from '../handlers/library-find-book.handler';

@ApiTags('[library] book')
@Controller('library/book/find')
export class LibraryFindBookController
{
    constructor(
        private readonly handler: LibraryFindBookHandler,
    ) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Find book according to query' })
    @ApiOkResponse({ description: 'The record has been successfully created.', type: LibraryBookDto })
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