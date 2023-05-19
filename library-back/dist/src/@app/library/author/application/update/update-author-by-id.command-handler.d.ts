import { ICommandHandler } from '@nestjs/cqrs';
import { UpdateAuthorByIdCommand } from './update-author-by-id.command';
import { UpdateAuthorByIdService } from './update-author-by-id.service';
export declare class UpdateAuthorByIdCommandHandler implements ICommandHandler<UpdateAuthorByIdCommand> {
    private readonly updateAuthorByIdService;
    constructor(updateAuthorByIdService: UpdateAuthorByIdService);
    execute(command: UpdateAuthorByIdCommand): Promise<void>;
}
