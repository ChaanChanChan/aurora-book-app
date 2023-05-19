import { IEventHandler } from '@nestjs/cqrs';
import { DeletedAuthorsEvent } from './deleted-authors.event';
export declare class DeletedAuthorsEventHandler implements IEventHandler<DeletedAuthorsEvent> {
    handle(event: DeletedAuthorsEvent): void;
}
