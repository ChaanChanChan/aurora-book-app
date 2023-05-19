import { IEventHandler } from '@nestjs/cqrs';
import { DeletedBookEvent } from './deleted-book.event';
export declare class DeletedBookEventHandler implements IEventHandler<DeletedBookEvent> {
    handle(event: DeletedBookEvent): void;
}
