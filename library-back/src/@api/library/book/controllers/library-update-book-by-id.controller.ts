/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Controller, Put, Body } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, QueryStatement, Timezone } from '@aurorajs.dev/core';
import { LibraryBookDto, LibraryUpdateBookByIdDto } from '../dto';

// @app
import { LibraryUpdateBookByIdHandler } from '../handlers/library-update-book-by-id.handler';

@ApiTags('[library] book')
@Controller('library/book/update')
export class LibraryUpdateBookByIdController
{
    constructor(
        private readonly handler: LibraryUpdateBookByIdHandler,
    ) {}

    @Put()
    @ApiOperation({ summary: 'Update book by id' })
    @ApiOkResponse({ description: 'The record has been successfully updated.', type: LibraryBookDto })
    async main(
        @Body() payload: LibraryUpdateBookByIdDto,
        @Body('constraint') constraint?: QueryStatement,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            constraint,
            timezone,
        );
    }
}