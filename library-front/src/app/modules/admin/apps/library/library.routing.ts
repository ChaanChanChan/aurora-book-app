/* eslint-disable max-len */
import { Route } from '@angular/router';
import { LibraryComponent } from './library.component';
import { AuthorListComponent } from './author/author-list.component';
import { AuthorDetailComponent } from './author/author-detail.component';
import { AuthorEditResolver, AuthorNewResolver, AuthorPaginationResolver } from './author/author.resolvers';
import { BookListComponent } from './book/book-list.component';
import { BookDetailComponent } from './book/book-detail.component';
import { BookEditResolver, BookNewResolver, BookPaginationResolver } from './book/book.resolvers';

export const libraryRoutes: Route[] = [
    {
        path     : '',
        component: LibraryComponent,
        children : [
            { path: 'author', component: AuthorListComponent, resolve: { data: AuthorPaginationResolver }, data: { permission: 'library.author.get' }},
            { path: 'author/new', component: AuthorDetailComponent, resolve: { data: AuthorNewResolver }, data: { permission: 'library.author.create' }},
            { path: 'author/edit/:id', component: AuthorDetailComponent, resolve: { data: AuthorEditResolver }, data: { permission: 'library.author.get' }},
            { path: 'book', component: BookListComponent, resolve: { data: BookPaginationResolver }, data: { permission: 'library.book.get' }},
            { path: 'book/new', component: BookDetailComponent, resolve: { data: BookNewResolver }, data: { permission: 'library.book.create' }},
            { path: 'book/edit/:id', component: BookDetailComponent, resolve: { data: BookEditResolver }, data: { permission: 'library.book.get' }},
        ],
    },
];
