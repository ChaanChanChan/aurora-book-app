import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteBookByIdCommand } from './delete-book-by-id.command';
import { DeleteBookByIdService } from './delete-book-by-id.service';
export declare class DeleteBookByIdCommandHandler implements ICommandHandler<DeleteBookByIdCommand> {
    private readonly deleteBookByIdService;
    constructor(deleteBookByIdService: DeleteBookByIdService);
    execute(command: DeleteBookByIdCommand): Promise<void>;
}
