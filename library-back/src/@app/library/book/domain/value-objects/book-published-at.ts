import { DataValueObject, DateValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BookPublishedAt extends DateValueObject
{
    public readonly type: string = 'BookPublishedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'BookPublishedAt',
            nullable   : false,
            undefinable: false,
        }, validationRules), data);
    }
}