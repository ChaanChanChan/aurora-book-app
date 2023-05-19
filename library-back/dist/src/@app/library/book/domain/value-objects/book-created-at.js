"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookCreatedAt = void 0;
const core_1 = require("@aurorajs.dev/core");
class BookCreatedAt extends core_1.TimestampValueObject {
    constructor(value, validationRules = {}, data = {}) {
        super(value, Object.assign({
            name: 'BookCreatedAt',
            nullable: true,
            undefinable: true,
        }, validationRules), data);
        this.type = 'BookCreatedAt';
    }
}
exports.BookCreatedAt = BookCreatedAt;
//# sourceMappingURL=book-created-at.js.map