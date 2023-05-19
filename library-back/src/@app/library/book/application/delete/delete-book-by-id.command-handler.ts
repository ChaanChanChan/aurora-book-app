import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteBookByIdCommand } from './delete-book-by-id.command';
import { DeleteBookByIdService } from './delete-book-by-id.service';
import {
    BookId
} from '../../domain/value-objects';

@CommandHandler(DeleteBookByIdCommand)
export class DeleteBookByIdCommandHandler implements ICommandHandler<DeleteBookByIdCommand>
{
    constructor(
        private readonly deleteBookByIdService: DeleteBookByIdService,
    ) {}

    async execute(command: DeleteBookByIdCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteBookByIdService.main(
            new BookId(command.id),
            command.constraint,
            command.cQMetadata,
        );
    }
}