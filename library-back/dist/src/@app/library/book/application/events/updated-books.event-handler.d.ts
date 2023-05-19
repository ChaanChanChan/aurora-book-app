import { IEventHandler } from '@nestjs/cqrs';
import { UpdatedBooksEvent } from './updated-books.event';
export declare class UpdatedBooksEventHandler implements IEventHandler<UpdatedBooksEvent> {
    handle(event: UpdatedBooksEvent): void;
}
