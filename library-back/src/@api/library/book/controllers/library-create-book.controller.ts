/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { LibraryBookDto, LibraryCreateBookDto } from '../dto';

// @app
import { LibraryCreateBookHandler } from '../handlers/library-create-book.handler';

@ApiTags('[library] book')
@Controller('library/book/create')
export class LibraryCreateBookController
{
    constructor(
        private readonly handler: LibraryCreateBookHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create book' })
    @ApiCreatedResponse({ description: 'The record has been successfully created.', type: LibraryBookDto })
    async main(
        @Body() payload: LibraryCreateBookDto,
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}