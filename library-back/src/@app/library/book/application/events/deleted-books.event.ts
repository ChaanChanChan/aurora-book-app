import { DeletedBookEvent } from './deleted-book.event';

export class DeletedBooksEvent
{
    constructor(
        public readonly books: DeletedBookEvent[],
    ) {}
}