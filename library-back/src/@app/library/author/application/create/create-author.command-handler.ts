/* eslint-disable key-spacing */
import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateAuthorCommand } from './create-author.command';
import { CreateAuthorService } from './create-author.service';
import {
    AuthorId,
    AuthorName,
    AuthorCreatedAt,
    AuthorUpdatedAt,
    AuthorDeletedAt,
} from '../../domain/value-objects';

@CommandHandler(CreateAuthorCommand)
export class CreateAuthorCommandHandler implements ICommandHandler<CreateAuthorCommand>
{
    constructor(
        private readonly createAuthorService: CreateAuthorService,
    ) {}

    async execute(command: CreateAuthorCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.createAuthorService.main(
            {
                id: new AuthorId(command.payload.id),
                name: new AuthorName(command.payload.name),
            },
            command.cQMetadata,
        );
    }
}