import { ICommandHandler } from '@nestjs/cqrs';
import { UpdateAuthorsCommand } from './update-authors.command';
import { UpdateAuthorsService } from './update-authors.service';
export declare class UpdateAuthorsCommandHandler implements ICommandHandler<UpdateAuthorsCommand> {
    private readonly updateAuthorsService;
    constructor(updateAuthorsService: UpdateAuthorsService);
    execute(command: UpdateAuthorsCommand): Promise<void>;
}
