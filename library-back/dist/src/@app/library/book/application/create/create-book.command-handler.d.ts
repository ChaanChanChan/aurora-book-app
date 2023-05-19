import { ICommandHandler } from '@nestjs/cqrs';
import { CreateBookCommand } from './create-book.command';
import { CreateBookService } from './create-book.service';
export declare class CreateBookCommandHandler implements ICommandHandler<CreateBookCommand> {
    private readonly createBookService;
    constructor(createBookService: CreateBookService);
    execute(command: CreateBookCommand): Promise<void>;
}
