import { UpdatedBookEvent } from './updated-book.event';
export declare class UpdatedBooksEvent {
    readonly books: UpdatedBookEvent[];
    constructor(books: UpdatedBookEvent[]);
}
