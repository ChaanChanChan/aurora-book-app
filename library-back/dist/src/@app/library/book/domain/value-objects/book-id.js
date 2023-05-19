"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookId = void 0;
const core_1 = require("@aurorajs.dev/core");
class BookId extends core_1.UuidValueObject {
    constructor(value, validationRules = {}, data = {}) {
        super(value, Object.assign({
            name: 'BookId',
            nullable: false,
            undefinable: false,
            length: 36,
        }, validationRules), data);
        this.type = 'BookId';
    }
}
exports.BookId = BookId;
//# sourceMappingURL=book-id.js.map