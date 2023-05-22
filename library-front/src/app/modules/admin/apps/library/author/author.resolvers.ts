import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Action, ActionService, GridData, GridFiltersStorageService, GridStateService, QueryStatementHandler } from '@aurora';
import { Observable } from 'rxjs';
import { LibraryAuthor } from '../library.types';
import { authorColumnsConfig } from './author.columns-config';
import { AuthorService } from './author.service';

@Injectable({
    providedIn: 'root',
})
export class AuthorPaginationResolver implements Resolve<GridData<LibraryAuthor>>
{
    constructor(
        private readonly actionService: ActionService,
        private readonly gridFiltersStorageService: GridFiltersStorageService,
        private readonly gridStateService: GridStateService,
        private readonly authorService: AuthorService,
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
    ): Observable<GridData<LibraryAuthor>>
    {
        this.actionService.action({
            id          : 'library::author.list.view',
            isViewAction: true,
        });

        const gridId = 'library::author.list.mainGridList';
        this.gridStateService.setPaginationActionId(gridId, 'library::author.list.pagination');
        this.gridStateService.setExportActionId(gridId, 'library::author.list.export');

        return this.authorService.pagination({
            query: QueryStatementHandler
                .init({ columnsConfig: authorColumnsConfig })
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
export class AuthorNewResolver implements Resolve<Action>
{
    constructor(
		private readonly actionService: ActionService,
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
    ): Action
    {
        return this.actionService.action({
            id          : 'library::author.detail.new',
            isViewAction: true,
        });
    }
}

@Injectable({
    providedIn: 'root',
})
export class AuthorEditResolver implements Resolve<{
	object: LibraryAuthor;
}>
{
    constructor(
		private readonly actionService: ActionService,
		private readonly authorService: AuthorService,
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
		object: LibraryAuthor;
    }>
    {
        this.actionService.action({
            id          : 'library::author.detail.edit',
            isViewAction: true,
        });

        return this.authorService.findById({
            id: route.paramMap.get('id'),
        });
    }
}
