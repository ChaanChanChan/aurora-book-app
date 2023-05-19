import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteBooksCommand } from './delete-books.command';
import { DeleteBooksService } from './delete-books.service';
export declare class DeleteBooksCommandHandler implements ICommandHandler<DeleteBooksCommand> {
    private readonly deleteBooksService;
    constructor(deleteBooksService: DeleteBooksService);
    execute(command: DeleteBooksCommand): Promise<void>;
}
