/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Body, Controller, HttpCode, Post } from '@nestjs/common';
import { ApiTags, ApiOkResponse, ApiOperation, ApiBody, ApiQuery } from '@nestjs/swagger';
import { QueryStatement, Timezone } from '@aurorajs.dev/core';
import { LibraryBookDto } from '../dto';

// @app
import { LibraryGetBooksHandler } from '../handlers/library-get-books.handler';

@ApiTags('[library] book')
@Controller('library/books/get')
export class LibraryGetBooksController
{
    constructor(
        private readonly handler: LibraryGetBooksHandler,
    ) {}

    @Post()
    @HttpCode(200)
    @ApiOperation({ summary: 'Get books according to query' })
    @ApiOkResponse({ description: 'The records has been found successfully.', type: [LibraryBookDto]})
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