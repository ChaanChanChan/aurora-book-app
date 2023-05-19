/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { LibraryBookDto, LibraryUpdateBookByIdDto } from '../dto';

// @app
import { LibraryUpsertBookHandler } from '../handlers/library-upsert-book.handler';

@ApiTags('[library] book')
@Controller('library/book/upsert')
export class LibraryUpsertBookController
{
    constructor(
        private readonly handler: LibraryUpsertBookHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Upsert book' })
    @ApiCreatedResponse({ description: 'The record has been successfully upserted.', type: LibraryBookDto })
    async main(
        @Body() payload: LibraryUpdateBookByIdDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}