import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { DeleteBooksCommand } from './delete-books.command';
import { DeleteBooksService } from './delete-books.service';

@CommandHandler(DeleteBooksCommand)
export class DeleteBooksCommandHandler implements ICommandHandler<DeleteBooksCommand>
{
    constructor(
        private readonly deleteBooksService: DeleteBooksService,
    ) {}

    async execute(command: DeleteBooksCommand): Promise<void>
    {
        // call to use case and implements ValueObjects
        await this.deleteBooksService.main(
            command.queryStatement,
            command.constraint,
            command.cQMetadata,
        );
    }
}