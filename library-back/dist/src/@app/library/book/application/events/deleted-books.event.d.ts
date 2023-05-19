import { DeletedBookEvent } from './deleted-book.event';
export declare class DeletedBooksEvent {
    readonly books: DeletedBookEvent[];
    constructor(books: DeletedBookEvent[]);
}
