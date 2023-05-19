import { IEventHandler } from '@nestjs/cqrs';
import { UpdatedAuthorsEvent } from './updated-authors.event';
export declare class UpdatedAuthorsEventHandler implements IEventHandler<UpdatedAuthorsEvent> {
    handle(event: UpdatedAuthorsEvent): void;
}
