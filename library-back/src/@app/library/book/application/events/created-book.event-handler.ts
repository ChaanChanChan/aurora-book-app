import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { CreatedBookEvent } from './created-book.event';

@EventsHandler(CreatedBookEvent)
export class CreatedBookEventHandler implements IEventHandler<CreatedBookEvent>
{
    handle(event: CreatedBookEvent): void
    {
        // console.log('CreatedBookEvent: ', event);
    }
}