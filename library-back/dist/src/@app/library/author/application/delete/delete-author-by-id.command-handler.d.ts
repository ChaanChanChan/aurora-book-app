import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteAuthorByIdCommand } from './delete-author-by-id.command';
import { DeleteAuthorByIdService } from './delete-author-by-id.service';
export declare class DeleteAuthorByIdCommandHandler implements ICommandHandler<DeleteAuthorByIdCommand> {
    private readonly deleteAuthorByIdService;
    constructor(deleteAuthorByIdService: DeleteAuthorByIdService);
    execute(command: DeleteAuthorByIdCommand): Promise<void>;
}
