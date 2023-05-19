import { IEventHandler } from '@nestjs/cqrs';
import { UpdatedBookEvent } from './updated-book.event';
export declare class UpdatedBookEventHandler implements IEventHandler<UpdatedBookEvent> {
    handle(event: UpdatedBookEvent): void;
}
