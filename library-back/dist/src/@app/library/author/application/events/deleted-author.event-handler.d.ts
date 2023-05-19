import { IEventHandler } from '@nestjs/cqrs';
import { DeletedAuthorEvent } from './deleted-author.event';
export declare class DeletedAuthorEventHandler implements IEventHandler<DeletedAuthorEvent> {
    handle(event: DeletedAuthorEvent): void;
}
