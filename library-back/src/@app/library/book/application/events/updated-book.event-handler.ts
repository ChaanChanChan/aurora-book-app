import { EventsHandler, IEventHandler } from '@nestjs/cqrs';
import { UpdatedBookEvent } from './updated-book.event';

@EventsHandler(UpdatedBookEvent)
export class UpdatedBookEventHandler implements IEventHandler<UpdatedBookEvent>
{
    handle(event: UpdatedBookEvent): void
    {
        // console.log('UpdatedBookEvent: ', event);
    }
}