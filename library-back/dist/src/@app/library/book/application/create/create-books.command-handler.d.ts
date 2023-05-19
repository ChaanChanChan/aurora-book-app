import { ICommandHandler } from '@nestjs/cqrs';
import { CreateBooksCommand } from './create-books.command';
import { CreateBooksService } from './create-books.service';
export declare class CreateBooksCommandHandler implements ICommandHandler<CreateBooksCommand> {
    private readonly createBooksService;
    constructor(createBooksService: CreateBooksService);
    execute(command: CreateBooksCommand): Promise<void>;
}
