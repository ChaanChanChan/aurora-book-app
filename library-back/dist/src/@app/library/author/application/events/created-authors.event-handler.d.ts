import { IEventHandler } from '@nestjs/cqrs';
import { CreatedAuthorsEvent } from './created-authors.event';
export declare class CreatedAuthorsEventHandler implements IEventHandler<CreatedAuthorsEvent> {
    handle(event: CreatedAuthorsEvent): void;
}
