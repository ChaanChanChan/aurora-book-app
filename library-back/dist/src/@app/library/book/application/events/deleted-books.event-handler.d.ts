import { IEventHandler } from '@nestjs/cqrs';
import { DeletedBooksEvent } from './deleted-books.event';
export declare class DeletedBooksEventHandler implements IEventHandler<DeletedBooksEvent> {
    handle(event: DeletedBooksEvent): void;
}
