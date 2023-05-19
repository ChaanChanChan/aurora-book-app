import { ICommandHandler } from '@nestjs/cqrs';
import { UpdateBookByIdCommand } from './update-book-by-id.command';
import { UpdateBookByIdService } from './update-book-by-id.service';
export declare class UpdateBookByIdCommandHandler implements ICommandHandler<UpdateBookByIdCommand> {
    private readonly updateBookByIdService;
    constructor(updateBookByIdService: UpdateBookByIdService);
    execute(command: UpdateBookByIdCommand): Promise<void>;
}
