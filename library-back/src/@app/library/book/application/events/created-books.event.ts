import { CreatedBookEvent } from './created-book.event';

export class CreatedBooksEvent
{
    constructor(
        public readonly books: CreatedBookEvent[],
    ) {}
}