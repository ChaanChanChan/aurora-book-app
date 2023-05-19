import { IEventHandler } from '@nestjs/cqrs';
import { CreatedBooksEvent } from './created-books.event';
export declare class CreatedBooksEventHandler implements IEventHandler<CreatedBooksEvent> {
    handle(event: CreatedBooksEvent): void;
}
