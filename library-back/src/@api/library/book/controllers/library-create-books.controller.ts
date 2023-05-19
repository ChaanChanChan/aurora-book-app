/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiCreatedResponse, ApiBody, ApiOperation } from '@nestjs/swagger';
import { Auditing, AuditingMeta, Timezone } from '@aurorajs.dev/core';
import { LibraryBookDto, LibraryCreateBookDto } from '../dto';

// @app
import { LibraryCreateBooksHandler } from '../handlers/library-create-books.handler';

@ApiTags('[library] book')
@Controller('library/books/create')
export class LibraryCreateBooksController
{
    constructor(
        private readonly handler: LibraryCreateBooksHandler,
    ) {}

    @Post()
    @ApiOperation({ summary: 'Create books in batch' })
    @ApiCreatedResponse({ description: 'The records has been created successfully.' , type: [LibraryBookDto]})
    @ApiBody({ type: [LibraryCreateBookDto]})
    async main(
        @Body() payload: LibraryCreateBookDto[],
        @Timezone() timezone?: string,
    )
    {
        return await this.handler.main(
            payload,
            timezone,
        );
    }
}