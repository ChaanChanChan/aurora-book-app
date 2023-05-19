import { DataValueObject, TimestampValueObject, ValidationRules } from '@aurorajs.dev/core';
export declare class AuthorDeletedAt extends TimestampValueObject {
    readonly type: string;
    constructor(value: string | DataValueObject, validationRules?: ValidationRules, data?: DataValueObject);
}
