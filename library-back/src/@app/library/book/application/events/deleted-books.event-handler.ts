import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DeletedBooksEvent } from './deleted-books.event';

@EventsHandler(DeletedBooksEvent)
export class DeletedBooksEventHandler implements IEventHandler<DeletedBooksEvent>
{
    handle(event: DeletedBooksEvent): void
    {
        // console.log('DeletedBooksEvent: ', event);
    }
}