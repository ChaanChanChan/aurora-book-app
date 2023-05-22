import { Injectable } from '@angular/core';
import { DocumentNode, FetchResult } from '@apollo/client/core';
import { GraphQLService, GridData, parseGqlFields, QueryStatement } from '@aurora';
import { BehaviorSubject, first, map, Observable, tap } from 'rxjs';
import { LibraryAuthor, LibraryBook, LibraryCreateBook, LibraryUpdateBookById, LibraryUpdateBooks } from '../library.types';
import { createMutation, deleteByIdMutation, deleteMutation, fields, findByIdQuery, findByIdWithRelationsQuery, findQuery, getQuery, getRelations, paginationQuery, updateByIdMutation, updateMutation } from './book.graphql';
import { AuthorService } from '../author/author.service';

@Injectable({
    providedIn: 'root',
})
export class BookService
{
    paginationSubject$: BehaviorSubject<GridData<LibraryBook> | null> = new BehaviorSubject(null);
    bookSubject$: BehaviorSubject<LibraryBook | null> = new BehaviorSubject(null);
    booksSubject$: BehaviorSubject<LibraryBook[] | null> = new BehaviorSubject(null);

    constructor(
        private readonly graphqlService: GraphQLService,
        private readonly authorService: AuthorService,
    ) {}

    /**
    * Getters
    */
    get pagination$(): Observable<GridData<LibraryBook>>
    {
        return this.paginationSubject$.asObservable();
    }

    get book$(): Observable<LibraryBook>
    {
        return this.bookSubject$.asObservable();
    }

    get books$(): Observable<LibraryBook[]>
    {
        return this.booksSubject$.asObservable();
    }

    pagination(
        {
            graphqlStatement = paginationQuery,
            query = {},
            constraint = {},
        }: {
            graphqlStatement?: DocumentNode;
            query?: QueryStatement;
            constraint?: QueryStatement;
        } = {},
    ): Observable<GridData<LibraryBook>>
    {
        // get result, map ang throw data across observable
        return this.graphqlService
            .client()
            .watchQuery<{ pagination: GridData<LibraryBook>; }>({
                query    : graphqlStatement,
                variables: {
                    query,
                    constraint,
                },
            })
            .valueChanges
            .pipe(
                first(),
                map(result => result.data.pagination),
                tap(pagination => this.paginationSubject$.next(pagination)),
            );
    }

    findById(
        {
            graphqlStatement = findByIdQuery,
            id = '',
            constraint = {},
        }: {
            graphqlStatement?: DocumentNode;
            id?: string;
            constraint?: QueryStatement;
        } = {},
    ): Observable<{
        object: LibraryBook;
    }>
    {
        return this.graphqlService
            .client()
            .watchQuery<{
                object: LibraryBook;
            }>({
                query    : parseGqlFields(graphqlStatement, fields, constraint),
                variables: {
                    id,
                    constraint,
                },
            })
            .valueChanges
            .pipe(
                first(),
                map(result => result.data),
                tap(data =>
                {
                    this.bookSubject$.next(data.object);
                }),
            );
    }

    findByIdWithRelations(
        {
            graphqlStatement = findByIdWithRelationsQuery,
            id = '',
            constraint = {},
            queryAuthors = {},
            constraintAuthors = {},
        }: {
            graphqlStatement?: DocumentNode;
            id?: string;
            constraint?: QueryStatement;
            queryAuthors?: QueryStatement;
            constraintAuthors?: QueryStatement;
        } = {},
    ): Observable<{
        object: LibraryBook;
        libraryGetAuthors: LibraryAuthor[];
    }>
    {
        return this.graphqlService
            .client()
            .watchQuery<{
                object: LibraryBook;
                libraryGetAuthors: LibraryAuthor[];
            }>({
                query    : parseGqlFields(graphqlStatement, fields, constraint),
                variables: {
                    id,
                    constraint,
                    queryAuthors,
                    constraintAuthors,
                },
            })
            .valueChanges
            .pipe(
                first(),
                map(result => result.data),
                tap(data =>
                {
                    this.bookSubject$.next(data.object);
                    this.authorService.authorsSubject$.next(data.libraryGetAuthors);
                }),
            );
    }

    find(
        {
            graphqlStatement = findQuery,
            query = {},
            constraint = {},
        }: {
            graphqlStatement?: DocumentNode;
            query?: QueryStatement;
            constraint?: QueryStatement;
        } = {},
    ): Observable<{
        object: LibraryBook;
    }>
    {
        return this.graphqlService
            .client()
            .watchQuery<{
                object: LibraryBook;
            }>({
                query    : parseGqlFields(graphqlStatement, fields, query, constraint),
                variables: {
                    query,
                    constraint,
                },
            })
            .valueChanges
            .pipe(
                first(),
                map(result => result.data),
                tap(data =>
                {
                    this.bookSubject$.next(data.object);
                }),
            );
    }

    get(
        {
            graphqlStatement = getQuery,
            query = {},
            constraint = {},
        }: {
            graphqlStatement?: DocumentNode;
            query?: QueryStatement;
            constraint?: QueryStatement;
        } = {},
    ): Observable<{
        objects: LibraryBook[];
    }>
    {
        return this.graphqlService
            .client()
            .watchQuery<{
                objects: LibraryBook[];
            }>({
                query    : parseGqlFields(graphqlStatement, fields, query, constraint),
                variables: {
                    query,
                    constraint,
                },
            })
            .valueChanges
            .pipe(
                first(),
                map(result => result.data),
                tap(data =>
                {
                    this.booksSubject$.next(data.objects);
                }),
            );
    }

    getRelations(
        {
            queryAuthors = {},
            constraintAuthors = {},
        }: {
            queryAuthors?: QueryStatement;
            constraintAuthors?: QueryStatement;
        } = {},
    ): Observable<{
        libraryGetAuthors: LibraryAuthor[];
    }>
    {
        return this.graphqlService
            .client()
            .watchQuery<{
                libraryGetAuthors: LibraryAuthor[];
            }>({
                query    : getRelations,
                variables: {
                    queryAuthors,
                    constraintAuthors,
                },
            })
            .valueChanges
            .pipe(
                first(),
                map(result => result.data),
                tap(data =>
                {
                    this.authorService.authorsSubject$.next(data.libraryGetAuthors);
                }),
            );
    }

    create<T>(
        {
            graphqlStatement = createMutation,
            object = null,
        }: {
            graphqlStatement?: DocumentNode;
            object?: LibraryCreateBook;
        } = {},
    ): Observable<FetchResult<T>>
    {
        return this.graphqlService
            .client()
            .mutate({
                mutation : graphqlStatement,
                variables: {
                    payload: object,
                },
            });
    }

    updateById<T>(
        {
            graphqlStatement = updateByIdMutation,
            object = null,
        }: {
            graphqlStatement?: DocumentNode;
            object?: LibraryUpdateBookById;
        } = {},
    ): Observable<FetchResult<T>>
    {
        return this.graphqlService
            .client()
            .mutate({
                mutation : graphqlStatement,
                variables: {
                    payload: object,
                },
            });
    }

    update<T>(
        {
            graphqlStatement = updateMutation,
            object = null,
            query = {},
            constraint = {},
        }: {
            graphqlStatement?: DocumentNode;
            object?: LibraryUpdateBooks;
            query?: QueryStatement;
            constraint?: QueryStatement;
        } = {},
    ): Observable<FetchResult<T>>
    {
        return this.graphqlService
            .client()
            .mutate({
                mutation : graphqlStatement,
                variables: {
                    payload: object,
                    query,
                    constraint,
                },
            });
    }

    deleteById<T>(
        id: string,
        graphqlStatement = deleteByIdMutation,
    ): Observable<FetchResult<T>>
    {
        return this.graphqlService
            .client()
            .mutate({
                mutation : graphqlStatement,
                variables: { id },
            });
    }

    delete<T>(
        {
            graphqlStatement = deleteMutation,
            query = {},
            constraint = {},
        }: {
            graphqlStatement?: DocumentNode;
            query?: QueryStatement;
            constraint?: QueryStatement;
        } = {},
    ): Observable<FetchResult<T>>
    {
        return this.graphqlService
            .client()
            .mutate({
                mutation : graphqlStatement,
                variables: { query, constraint },
            });
    }
}