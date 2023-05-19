import { ICommandHandler } from '@nestjs/cqrs';
import { UpsertBookCommand } from './upsert-book.command';
import { UpsertBookService } from './upsert-book.service';
export declare class UpsertBookCommandHandler implements ICommandHandler<UpsertBookCommand> {
    private readonly upsertBookService;
    constructor(upsertBookService: UpsertBookService);
    execute(command: UpsertBookCommand): Promise<void>;
}
