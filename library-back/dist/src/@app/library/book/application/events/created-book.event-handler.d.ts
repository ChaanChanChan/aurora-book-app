import { IEventHandler } from '@nestjs/cqrs';
import { CreatedBookEvent } from './created-book.event';
export declare class CreatedBookEventHandler implements IEventHandler<CreatedBookEvent> {
    handle(event: CreatedBookEvent): void;
}
