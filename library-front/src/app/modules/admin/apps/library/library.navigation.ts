import { FuseNavigationItem } from '@fuse/components/navigation';

export const libraryNavigation: FuseNavigationItem = {
    id      : 'library',
    title   : 'Library',
    type    : 'collapsable',
    icon    : 'heroicons_outline:tag',
    children: [
        {
            id   : 'authors',
            title: 'Author',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/library/author',
        },
        {
            id   : 'books',
            title: 'Book',
            type : 'basic',
            icon : 'heroicons_outline:tag',
            link : '/library/book',
        },
    ],
};