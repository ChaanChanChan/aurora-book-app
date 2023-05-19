
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface LibraryCreateAuthorInput {
    id: string;
    name: GraphQLString;
}

export interface LibraryUpdateAuthorByIdInput {
    id: string;
    name?: Nullable<GraphQLString>;
}

export interface LibraryUpdateAuthorsInput {
    id?: Nullable<string>;
    name?: Nullable<GraphQLString>;
}

export interface LibraryCreateBookInput {
    id: string;
    title: GraphQLString;
    publishedAt: GraphQLISODateTime;
    price: GraphQLInt;
    authorId: string;
}

export interface LibraryUpdateBookByIdInput {
    id: string;
    title?: Nullable<GraphQLString>;
    publishedAt?: Nullable<GraphQLISODateTime>;
    price?: Nullable<GraphQLInt>;
    authorId?: Nullable<string>;
}

export interface LibraryUpdateBooksInput {
    id?: Nullable<string>;
    title?: Nullable<GraphQLString>;
    publishedAt?: Nullable<GraphQLISODateTime>;
    price?: Nullable<GraphQLInt>;
    authorId?: Nullable<string>;
}

export interface QueryStatement {
    where?: Nullable<JSON>;
    attributes?: Nullable<JSON>;
    include?: Nullable<Nullable<GraphQLString>[]>;
    order?: Nullable<JSON>;
    group?: Nullable<JSON>;
    limit?: Nullable<GraphQLInt>;
    offset?: Nullable<GraphQLInt>;
    distinct?: Nullable<GraphQLBoolean>;
    col?: Nullable<GraphQLString>;
}

export interface LibraryAuthor {
    id: string;
    name: GraphQLString;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface IQuery {
    libraryFindAuthor(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<LibraryAuthor> | Promise<Nullable<LibraryAuthor>>;
    libraryFindAuthorById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<LibraryAuthor> | Promise<Nullable<LibraryAuthor>>;
    libraryGetAuthors(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<LibraryAuthor>[] | Promise<Nullable<LibraryAuthor>[]>;
    libraryPaginateAuthors(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    libraryFindBook(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<LibraryBook> | Promise<Nullable<LibraryBook>>;
    libraryFindBookById(id?: Nullable<string>, constraint?: Nullable<QueryStatement>): Nullable<LibraryBook> | Promise<Nullable<LibraryBook>>;
    libraryGetBooks(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<LibraryBook>[] | Promise<Nullable<LibraryBook>[]>;
    libraryPaginateBooks(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Pagination | Promise<Pagination>;
    hello(): Nullable<string> | Promise<Nullable<string>>;
}

export interface IMutation {
    libraryCreateAuthor(payload: LibraryCreateAuthorInput): Nullable<LibraryAuthor> | Promise<Nullable<LibraryAuthor>>;
    libraryCreateAuthors(payload: Nullable<LibraryCreateAuthorInput>[]): boolean | Promise<boolean>;
    libraryUpdateAuthorById(payload: LibraryUpdateAuthorByIdInput, constraint?: Nullable<QueryStatement>): Nullable<LibraryAuthor> | Promise<Nullable<LibraryAuthor>>;
    libraryUpdateAuthors(payload: LibraryUpdateAuthorsInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<LibraryAuthor>[] | Promise<Nullable<LibraryAuthor>[]>;
    libraryUpsertAuthor(payload: LibraryUpdateAuthorByIdInput): Nullable<LibraryAuthor> | Promise<Nullable<LibraryAuthor>>;
    libraryDeleteAuthorById(id: string, constraint?: Nullable<QueryStatement>): Nullable<LibraryAuthor> | Promise<Nullable<LibraryAuthor>>;
    libraryDeleteAuthors(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<LibraryAuthor>[] | Promise<Nullable<LibraryAuthor>[]>;
    libraryCreateBook(payload: LibraryCreateBookInput): Nullable<LibraryBook> | Promise<Nullable<LibraryBook>>;
    libraryCreateBooks(payload: Nullable<LibraryCreateBookInput>[]): boolean | Promise<boolean>;
    libraryUpdateBookById(payload: LibraryUpdateBookByIdInput, constraint?: Nullable<QueryStatement>): Nullable<LibraryBook> | Promise<Nullable<LibraryBook>>;
    libraryUpdateBooks(payload: LibraryUpdateBooksInput, query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<LibraryBook>[] | Promise<Nullable<LibraryBook>[]>;
    libraryUpsertBook(payload: LibraryUpdateBookByIdInput): Nullable<LibraryBook> | Promise<Nullable<LibraryBook>>;
    libraryDeleteBookById(id: string, constraint?: Nullable<QueryStatement>): Nullable<LibraryBook> | Promise<Nullable<LibraryBook>>;
    libraryDeleteBooks(query?: Nullable<QueryStatement>, constraint?: Nullable<QueryStatement>): Nullable<LibraryBook>[] | Promise<Nullable<LibraryBook>[]>;
}

export interface LibraryBook {
    id: string;
    title: GraphQLString;
    publishedAt: GraphQLISODateTime;
    price: GraphQLInt;
    authorId: string;
    author?: Nullable<LibraryAuthor>;
    createdAt?: Nullable<GraphQLTimestamp>;
    updatedAt?: Nullable<GraphQLTimestamp>;
    deletedAt?: Nullable<GraphQLTimestamp>;
}

export interface Pagination {
    total: GraphQLInt;
    count: GraphQLInt;
    rows: Nullable<JSON>[];
}

export type JSON = any;
export type Any = any;
export type Upload = any;
export type GraphQLString = any;
export type GraphQLInt = any;
export type GraphQLFloat = any;
export type GraphQLBoolean = any;
export type GraphQLISODateTime = any;
export type GraphQLTimestamp = any;
export type GraphQLUpload = any;
type Nullable<T> = T | null;
