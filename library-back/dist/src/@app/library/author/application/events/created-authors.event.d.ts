import { CreatedAuthorEvent } from './created-author.event';
export declare class CreatedAuthorsEvent {
    readonly authors: CreatedAuthorEvent[];
    constructor(authors: CreatedAuthorEvent[]);
}
