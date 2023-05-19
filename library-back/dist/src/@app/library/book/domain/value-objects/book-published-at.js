"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookPublishedAt = void 0;
const core_1 = require("@aurorajs.dev/core");
class BookPublishedAt extends core_1.DateValueObject {
    constructor(value, validationRules = {}, data = {}) {
        super(value, Object.assign({
            name: 'BookPublishedAt',
            nullable: false,
            undefinable: false,
        }, validationRules), data);
        this.type = 'BookPublishedAt';
    }
}
exports.BookPublishedAt = BookPublishedAt;
//# sourceMappingURL=book-published-at.js.map