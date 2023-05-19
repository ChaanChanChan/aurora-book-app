/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Put, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { LibraryBookDto, LibraryUpdateBooksDto } from '../dto';

// @app
import { LibraryUpdateBooksHandler } from '../handlers/library-update-books.handler';

@ApiTags('[library] book')
@Controller('library/books/update')
export class LibraryUpdateBooksController
{
    constructor(
        private readonly handler: LibraryUpdateBooksHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update books' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: LibraryBookDto })
    async main(
        @Body() payload: LibraryUpdateBooksDto,
        @Body('query') queryStatement?: QueryStatement,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            queryStatement,
            constraint,
            timezone,
        );
    }
}