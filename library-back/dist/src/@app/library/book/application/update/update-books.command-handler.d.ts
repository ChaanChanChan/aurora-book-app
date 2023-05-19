import { ICommandHandler } from '@nestjs/cqrs';
import { UpdateBooksCommand } from './update-books.command';
import { UpdateBooksService } from './update-books.service';
export declare class UpdateBooksCommandHandler implements ICommandHandler<UpdateBooksCommand> {
    private readonly updateBooksService;
    constructor(updateBooksService: UpdateBooksService);
    execute(command: UpdateBooksCommand): Promise<void>;
}
