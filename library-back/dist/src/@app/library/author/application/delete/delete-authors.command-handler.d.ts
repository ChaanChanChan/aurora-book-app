import { ICommandHandler } from '@nestjs/cqrs';
import { DeleteAuthorsCommand } from './delete-authors.command';
import { DeleteAuthorsService } from './delete-authors.service';
export declare class DeleteAuthorsCommandHandler implements ICommandHandler<DeleteAuthorsCommand> {
    private readonly deleteAuthorsService;
    constructor(deleteAuthorsService: DeleteAuthorsService);
    execute(command: DeleteAuthorsCommand): Promise<void>;
}
