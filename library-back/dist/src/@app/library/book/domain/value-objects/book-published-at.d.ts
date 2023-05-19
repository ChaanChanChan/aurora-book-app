import { DataValueObject, DateValueObject, ValidationRules } from '@aurorajs.dev/core';
export declare class BookPublishedAt extends DateValueObject {
    readonly type: string;
    constructor(value: string | DataValueObject, validationRules?: ValidationRules, data?: DataValueObject);
}
