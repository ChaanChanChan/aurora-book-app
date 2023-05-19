import { StringValueObject, ValidationRules } from '@aurorajs.dev/core';
export declare class BookTitle extends StringValueObject {
    readonly type: string;
    constructor(value: string, validationRules?: ValidationRules);
}
