import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BookId extends UuidValueObject
{
    public readonly type: string = 'BookId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'BookId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}