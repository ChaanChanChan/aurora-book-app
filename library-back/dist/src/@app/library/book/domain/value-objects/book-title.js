"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookTitle = void 0;
const core_1 = require("@aurorajs.dev/core");
class BookTitle extends core_1.StringValueObject {
    constructor(value, validationRules = {}) {
        super(value, Object.assign({
            name: 'BookTitle',
            nullable: false,
            undefinable: false,
            maxLength: 50,
        }, validationRules));
        this.type = 'BookTitle';
    }
}
exports.BookTitle = BookTitle;
//# sourceMappingURL=book-title.js.map