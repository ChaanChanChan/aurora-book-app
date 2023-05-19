import { CreatedBookEvent } from './created-book.event';
export declare class CreatedBooksEvent {
    readonly books: CreatedBookEvent[];
    constructor(books: CreatedBookEvent[]);
}
