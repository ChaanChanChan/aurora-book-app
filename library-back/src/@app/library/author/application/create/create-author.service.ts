import { ConflictException, Injectable } from '@nestjs/common';
import { EventPublisher } from '@nestjs/cqrs';
import { CQMetadata } from '@aurorajs.dev/core';
import { IAuthorRepository } from '../../domain/author.repository';
import { LibraryAuthor } from '../../domain/author.aggregate';
import {
	AuthorCreatedAt,
	AuthorDeletedAt,
	AuthorId,
	AuthorName,
	AuthorUpdatedAt,
} from '../../domain/value-objects';

@Injectable()
export class CreateAuthorService
{
    constructor(
        private readonly publisher: EventPublisher,
        private readonly repository: IAuthorRepository,
    ) {}

    async main(
        payload: {
            id: AuthorId;
            name: AuthorName;
        },
        cQMetadata?: CQMetadata,
    ): Promise<void>
    {
        // create aggregate with factory pattern
        const author = LibraryAuthor.register(
            payload.id,
            payload.name,
            new AuthorCreatedAt({ currentTimestamp: true }),
            new AuthorUpdatedAt({ currentTimestamp: true }),
            null, // deletedAt
        );

        await this.repository.create(author, { createOptions: cQMetadata?.repositoryOptions });

        // merge EventBus methods with object returned by the repository, to be able to apply and commit events
        const authorRegister = this.publisher.mergeObjectContext(
            author,
        );

        authorRegister.created(author); // apply event to model events
        authorRegister.commit(); // commit all events of model
    }
}