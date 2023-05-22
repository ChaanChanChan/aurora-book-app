import { ColumnConfig, ColumnDataType } from '@aurora';

export const authorColumnsConfig: ColumnConfig[] = [
    {
        type       : ColumnDataType.STRING,
        field      : 'name',
        sort       : 'name',
        translation: 'library.Name',
    },
];