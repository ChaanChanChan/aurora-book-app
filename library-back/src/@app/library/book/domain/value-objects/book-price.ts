import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';

export class BookPrice extends IntValueObject
{
    public readonly type: string = 'BookPrice';

    constructor(value: number, validationRules: ValidationRules = {})
    {
        super(value, Object.assign({
            name       : 'BookPrice',
            nullable   : false,
            undefinable: false,
            maxLength  : 10,
            unsigned   : true,
        }, validationRules));
    }
}