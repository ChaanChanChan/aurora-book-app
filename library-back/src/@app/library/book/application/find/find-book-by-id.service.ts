import { Injectable } from '@nestjs/common';
import { CQMetadata, QueryStatement } from '@aurorajs.dev/core';
import { IBookRepository } from '../../domain/book.repository';
import { LibraryBook } from '../../domain/book.aggregate';
import { BookId } from '../../domain/value-objects';

@Injectable()
export class FindBookByIdService
{
    constructor(
        private readonly repository: IBookRepository,
    ) {}

    async main(
        id: BookId,
        constraint?: QueryStatement,
        cQMetadata?: CQMetadata,
    ): Promise<LibraryBook>
    {
        return await this.repository.findById(
            id,
            {
                constraint,
                cQMetadata,
            },
        );
    }
}