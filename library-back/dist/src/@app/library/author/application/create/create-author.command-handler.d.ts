import { ICommandHandler } from '@nestjs/cqrs';
import { CreateAuthorCommand } from './create-author.command';
import { CreateAuthorService } from './create-author.service';
export declare class CreateAuthorCommandHandler implements ICommandHandler<CreateAuthorCommand> {
    private readonly createAuthorService;
    constructor(createAuthorService: CreateAuthorService);
    execute(command: CreateAuthorCommand): Promise<void>;
}
