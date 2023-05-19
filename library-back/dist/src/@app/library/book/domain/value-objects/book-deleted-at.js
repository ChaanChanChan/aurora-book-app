"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookDeletedAt = void 0;
const core_1 = require("@aurorajs.dev/core");
class BookDeletedAt extends core_1.TimestampValueObject {
    constructor(value, validationRules = {}, data = {}) {
        super(value, Object.assign({
            name: 'BookDeletedAt',
            nullable: true,
            undefinable: true,
        }, validationRules), data);
        this.type = 'BookDeletedAt';
    }
}
exports.BookDeletedAt = BookDeletedAt;
//# sourceMappingURL=book-deleted-at.js.map