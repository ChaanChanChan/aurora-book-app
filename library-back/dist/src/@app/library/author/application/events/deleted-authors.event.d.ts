import { DeletedAuthorEvent } from './deleted-author.event';
export declare class DeletedAuthorsEvent {
    readonly authors: DeletedAuthorEvent[];
    constructor(authors: DeletedAuthorEvent[]);
}
