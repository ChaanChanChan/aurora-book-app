import { IEventHandler } from '@nestjs/cqrs';
import { UpdatedAuthorEvent } from './updated-author.event';
export declare class UpdatedAuthorEventHandler implements IEventHandler<UpdatedAuthorEvent> {
    handle(event: UpdatedAuthorEvent): void;
}
