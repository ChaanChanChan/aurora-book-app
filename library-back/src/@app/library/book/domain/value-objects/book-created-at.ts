import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BookCreatedAt extends TimestampValueObject
{
    public readonly type: string = 'BookCreatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'BookCreatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}