import { ICommandHandler } from '@nestjs/cqrs';
import { UpsertAuthorCommand } from './upsert-author.command';
import { UpsertAuthorService } from './upsert-author.service';
export declare class UpsertAuthorCommandHandler implements ICommandHandler<UpsertAuthorCommand> {
    private readonly upsertAuthorService;
    constructor(upsertAuthorService: UpsertAuthorService);
    execute(command: UpsertAuthorCommand): Promise<void>;
}
