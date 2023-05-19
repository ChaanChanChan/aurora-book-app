import { DataValueObject, UuidValueObject, ValidationRules } from '@aurorajs.dev/core';
export declare class AuthorId extends UuidValueObject {
    readonly type: string;
    constructor(value: string, validationRules?: ValidationRules, data?: DataValueObject);
}
