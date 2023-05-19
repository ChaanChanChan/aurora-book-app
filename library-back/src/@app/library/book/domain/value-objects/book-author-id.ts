import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BookAuthorId extends UuidValueObject
{
    public readonly type: string = 'BookAuthorId';

    constructor(value: string, validationRules: ValidationRules = {}, data: DataValueObject = {})
    {
        super(value, Object.assign({
            name       : 'BookAuthorId',
            nullable   : false,
            undefinable: false,
            length     : 36,
        }, validationRules), data);
    }
}