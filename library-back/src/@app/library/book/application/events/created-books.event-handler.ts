import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CreatedBooksEvent } from './created-books.event';

@EventsHandler(CreatedBooksEvent)
export class CreatedBooksEventHandler implements IEventHandler<CreatedBooksEvent>
{
    handle(event: CreatedBooksEvent): void
    {
        // console.log('CreatedBooksEvent: ', event);
    }
}