export declare class CreatedBookEvent {
    readonly id: string;
    readonly title: string;
    readonly publishedAt: string;
    readonly price: number;
    readonly authorId: string;
    readonly createdAt: string;
    readonly updatedAt: string;
    readonly deletedAt: string;
    constructor(id: string, title: string, publishedAt: string, price: number, authorId: string, createdAt: string, updatedAt: string, deletedAt: string);
}
