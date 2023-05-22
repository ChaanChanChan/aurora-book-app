import { ColumnConfig, ColumnDataType } from '@aurora';

export const bookColumnsConfig: ColumnConfig[] = [
    {
        type       : ColumnDataType.STRING,
        field      : 'title',
        sort       : 'title',
        translation: 'library.Title',
    },
    {
        type       : ColumnDataType.STRING,
        field      : 'publishedAt',
        sort       : 'publishedAt',
        translation: 'library.PublishedAt',
    },
    {
        type       : ColumnDataType.NUMBER,
        field      : 'price',
        sort       : 'price',
        translation: 'library.Price',
    },
    {
        type       : ColumnDataType.STRING,
        field      : 'authorId',
        sort       : 'authorId',
        translation: 'library.AuthorId',
    },
];