import { UpdatedBookEvent } from './updated-book.event';

export class UpdatedBooksEvent
{
    constructor(
        public readonly books: UpdatedBookEvent[],
    ) {}
}