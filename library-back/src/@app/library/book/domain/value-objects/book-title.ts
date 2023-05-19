import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BookTitle extends StringValueObject
{
    public readonly type: string = 'BookTitle';

    constructor(value: string, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'BookTitle',
            nullable   : false,
            undefinable: false,
            maxLength  : 50,
        }, validationRules));
    }
}