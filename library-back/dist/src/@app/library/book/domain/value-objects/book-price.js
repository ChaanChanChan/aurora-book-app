"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookPrice = void 0;
const core_1 = require("@aurorajs.dev/core");
class BookPrice extends core_1.IntValueObject {
    constructor(value, validationRules = {}) {
        super(value, Object.assign({
            name: 'BookPrice',
            nullable: false,
            undefinable: false,
            maxLength: 10,
            unsigned: true,
        }, validationRules));
        this.type = 'BookPrice';
    }
}
exports.BookPrice = BookPrice;
//# sourceMappingURL=book-price.js.map