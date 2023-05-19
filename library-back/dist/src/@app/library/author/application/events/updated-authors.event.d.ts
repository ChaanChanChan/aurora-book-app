import { UpdatedAuthorEvent } from './updated-author.event';
export declare class UpdatedAuthorsEvent {
    readonly authors: UpdatedAuthorEvent[];
    constructor(authors: UpdatedAuthorEvent[]);
}
