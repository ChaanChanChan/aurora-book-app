import { IntValueObject, ValidationRules } from '@aurorajs.dev/core';
export declare class BookPrice extends IntValueObject {
    readonly type: string;
    constructor(value: number, validationRules?: ValidationRules);
}
