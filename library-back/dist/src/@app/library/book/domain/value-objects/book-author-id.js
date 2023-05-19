"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookAuthorId = void 0;
const core_1 = require("@aurorajs.dev/core");
class BookAuthorId extends core_1.UuidValueObject {
    constructor(value, validationRules = {}, data = {}) {
        super(value, Object.assign({
            name: 'BookAuthorId',
            nullable: false,
            undefinable: false,
            length: 36,
        }, validationRules), data);
        this.type = 'BookAuthorId';
    }
}
exports.BookAuthorId = BookAuthorId;
//# sourceMappingURL=book-author-id.js.map