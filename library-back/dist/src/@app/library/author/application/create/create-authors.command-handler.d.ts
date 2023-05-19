import { ICommandHandler } from '@nestjs/cqrs';
import { CreateAuthorsCommand } from './create-authors.command';
import { CreateAuthorsService } from './create-authors.service';
export declare class CreateAuthorsCommandHandler implements ICommandHandler<CreateAuthorsCommand> {
    private readonly createAuthorsService;
    constructor(createAuthorsService: CreateAuthorsService);
    execute(command: CreateAuthorsCommand): Promise<void>;
}
