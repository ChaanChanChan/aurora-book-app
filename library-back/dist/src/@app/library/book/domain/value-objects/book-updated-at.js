"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookUpdatedAt = void 0;
const core_1 = require("@aurorajs.dev/core");
class BookUpdatedAt extends core_1.TimestampValueObject {
    constructor(value, validationRules = {}, data = {}) {
        super(value, Object.assign({
            name: 'BookUpdatedAt',
            nullable: true,
            undefinable: true,
        }, validationRules), data);
        this.type = 'BookUpdatedAt';
    }
}
exports.BookUpdatedAt = BookUpdatedAt;
//# sourceMappingURL=book-updated-at.js.map