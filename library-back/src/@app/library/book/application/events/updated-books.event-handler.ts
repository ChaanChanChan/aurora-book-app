import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UpdatedBooksEvent } from './updated-books.event';

@EventsHandler(UpdatedBooksEvent)
export class UpdatedBooksEventHandler implements IEventHandler<UpdatedBooksEvent>
{
    handle(event: UpdatedBooksEvent): void
    {
        // console.log('UpdatedBooksEvent: ', event);
    }
}