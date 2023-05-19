import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';
export declare class BookId extends UuidValueObject {
    readonly type: string;
    constructor(value: string, validationRules?: ValidationRules, data?: DataValueObject);
}
