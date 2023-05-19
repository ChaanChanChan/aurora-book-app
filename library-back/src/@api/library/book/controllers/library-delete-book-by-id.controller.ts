/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, Param, Delete } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { LibraryBookDto } from '../dto';

// @app
import { LibraryDeleteBookByIdHandler } from '../handlers/library-delete-book-by-id.handler';

@ApiTags('[library] book')
@Controller('library/book/delete')
export class LibraryDeleteBookByIdController
{
    constructor(
        private readonly handler: LibraryDeleteBookByIdHandler,
    ) {}

    @Delete(':id')
    @ApiOperation({ summary: 'Delete book by id' })
    @ApiOkResponse({ description: 'The record has been deleted successfully.', type: LibraryBookDto })
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