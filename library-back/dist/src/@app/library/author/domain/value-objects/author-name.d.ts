import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';
export declare class AuthorName extends StringValueObject {
    readonly type: string;
    constructor(value: string, validationRules?: ValidationRules);
}
