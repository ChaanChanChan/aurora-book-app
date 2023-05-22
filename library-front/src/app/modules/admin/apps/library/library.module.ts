import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';
import { FuseConfirmationModule } from '@fuse/services/confirmation';
import { DatePickerDayjsAdapter, DatePickerDayjsFormats, ValidationMessagesModule } from '@aurora';
import { SharedModule } from 'app/shared/shared.module';

// Material
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar';

//
import { libraryRoutes } from './library.routing';
import { LibraryComponent } from './library.component';
import { AuthorListComponent } from './author/author-list.component';
import { AuthorDetailComponent } from './author/author-detail.component';
import { BookListComponent } from './book/book-list.component';
import { BookDetailComponent } from './book/book-detail.component';

@NgModule({
    imports: [
        RouterModule.forChild(libraryRoutes),
        SharedModule,
        TranslocoModule,
        ValidationMessagesModule,

        // Fuse
        FuseConfirmationModule,

        // Material
        MatButtonModule,
        MatCheckboxModule,
        MatDatepickerModule,
        MatIconModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatSelectModule,
        MatSnackBarModule,
    ],
    declarations: [
        LibraryComponent,
        AuthorDetailComponent,
        AuthorListComponent,
        BookDetailComponent,
        BookListComponent
    ],
    providers: [
        {
            provide : TRANSLOCO_SCOPE,
            useValue: 'library',
            multi   : true,
        },
        {
            provide : TRANSLOCO_SCOPE,
            useValue: 'error',
            multi   : true,
        },
        {
            provide : MAT_DATE_LOCALE,
            useValue: 'es-ES',
        },
        {
            provide : DateAdapter,
            useClass: DatePickerDayjsAdapter,
            deps    : [MAT_DATE_LOCALE],
        },
        {
            provide : MAT_DATE_FORMATS,
            useValue: DatePickerDayjsFormats,
        },
    ],
})
export class LibraryModule
{
}
