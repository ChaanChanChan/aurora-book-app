import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BookUpdatedAt extends TimestampValueObject
{
    public readonly type: string = 'BookUpdatedAt';

    constructor(value: string | DataValueObject, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'BookUpdatedAt',
            nullable   : true,
            undefinable: true,
        }, validationRules), data);
    }
}