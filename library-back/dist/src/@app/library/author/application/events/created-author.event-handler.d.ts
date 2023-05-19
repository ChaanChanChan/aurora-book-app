import { IEventHandler } from '@nestjs/cqrs';
import { CreatedAuthorEvent } from './created-author.event';
export declare class CreatedAuthorEventHandler implements IEventHandler<CreatedAuthorEvent> {
    handle(event: CreatedAuthorEvent): void;
}
