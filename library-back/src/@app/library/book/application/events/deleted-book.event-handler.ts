import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { DeletedBookEvent } from './deleted-book.event';

@EventsHandler(DeletedBookEvent)
export class DeletedBookEventHandler implements IEventHandler<DeletedBookEvent>
{
    handle(event: DeletedBookEvent): void
    {
        // console.log('DeletedBookEvent: ', event);
    }
}