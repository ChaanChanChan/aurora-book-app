export interface LibraryAuthor {
    id: string;
    name: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}

export interface LibraryCreateAuthor {
    id: string;
    name: string;
}

export interface LibraryUpdateAuthorById {
    id: string;
    name?: string;
}

export interface LibraryUpdateAuthors {
    id?: string;
    name?: string;
}

export interface LibraryBook {
    id: string;
    title: string;
    publishedAt: string;
    price: number;
    authorId: string;
    createdAt?: string;
    updatedAt?: string;
    deletedAt?: string;
}

export interface LibraryCreateBook {
    id: string;
    title: string;
    publishedAt: string;
    price: number;
    authorId: string;
}

export interface LibraryUpdateBookById {
    id: string;
    title?: string;
    publishedAt?: string;
    price?: number;
    authorId?: string;
}

export interface LibraryUpdateBooks {
    id?: string;
    title?: string;
    publishedAt?: string;
    price?: number;
    authorId?: string;
}
