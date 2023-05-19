/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, HttpCode, Param, Post } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { LibraryBookDto } from '../dto';

// @app
import { LibraryFindBookByIdHandler } from '../handlers/library-find-book-by-id.handler';

@ApiTags('[library] book')
@Controller('library/book/find')
export class LibraryFindBookByIdController
{
    constructor(
        private readonly handler: LibraryFindBookByIdHandler,
    ) {}

    @Post(':id')
    @HttpCode(200)
    @ApiOperation({ summary: 'Find book by id' })
    @ApiOkResponse({ description: 'The record has been successfully requested.', type: LibraryBookDto })
    async main(
        @Param('id') id: string,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            id,
            constraint,
            timezone,
        );
    }
}