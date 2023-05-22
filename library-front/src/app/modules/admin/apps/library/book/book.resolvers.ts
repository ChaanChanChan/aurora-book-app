import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Action, ActionService, GridData, GridFiltersStorageService, GridStateService, QueryStatementHandler } from '@aurora';
import { Observable } from 'rxjs';
import { LibraryAuthor, LibraryBook } from '../library.types';
import { bookColumnsConfig } from './book.columns-config';
import { BookService } from './book.service';
import { AuthorService } from '../author/author.service';

@Injectable({
    providedIn: 'root',
})
export class BookPaginationResolver implements Resolve<GridData<LibraryBook>>
{
    constructor(
        private readonly actionService: ActionService,
        private readonly gridFiltersStorageService: GridFiltersStorageService,
        private readonly gridStateService: GridStateService,
        private readonly bookService: BookService,
    ) {}

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<GridData<LibraryBook>>
    {
        this.actionService.action({
            id          : 'library::book.list.view',
            isViewAction: true,
        });

        const gridId = 'library::book.list.mainGridList';
        this.gridStateService.setPaginationActionId(gridId, 'library::book.list.pagination');
        this.gridStateService.setExportActionId(gridId, 'library::book.list.export');

        return this.bookService.pagination({
            query: QueryStatementHandler
                .init({ columnsConfig: bookColumnsConfig })
                .setColumFilters(this.gridFiltersStorageService.getColumnFilterState(gridId))
                .setSort(this.gridStateService.getSort(gridId))
                .setPage(this.gridStateService.getPage(gridId))
                .setSearch(this.gridStateService.getSearchState(gridId))
                .getQueryStatement(),
        });
    }
}

@Injectable({
    providedIn: 'root',
})
export class BookNewResolver implements Resolve<{
    libraryGetAuthors: LibraryAuthor[];
}>
{
    constructor(
		private readonly actionService: ActionService,
		private readonly bookService: BookService,
    )
    {}

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<{
        libraryGetAuthors: LibraryAuthor[];
    }>
    {
        this.actionService.action({
            id          : 'library::book.detail.new',
            isViewAction: true,
        });

        return this.bookService.getRelations();
    }
}

@Injectable({
    providedIn: 'root',
})
export class BookEditResolver implements Resolve<{
	libraryGetAuthors: LibraryAuthor[];
	object: LibraryBook;
}>
{
    constructor(
		private readonly actionService: ActionService,
		private readonly bookService: BookService,
    )
    {}

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot,
    ): Observable<{
		libraryGetAuthors: LibraryAuthor[];
		object: LibraryBook;
    }>
    {
        this.actionService.action({
            id          : 'library::book.detail.edit',
            isViewAction: true,
        });

        return this.bookService.findByIdWithRelations({
            id: route.paramMap.get('id'),
        });
    }
}
