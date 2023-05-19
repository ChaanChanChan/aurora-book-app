import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BookDeletedAt extends TimestampValueObject
{
    public readonly type: string = 'BookDeletedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'BookDeletedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}