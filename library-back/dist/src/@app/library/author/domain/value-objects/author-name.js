"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorName = void 0;
const core_1 = require("@aurorajs.dev/core");
class AuthorName extends core_1.StringValueObject {
    constructor(value, validationRules = {}) {
        super(value, Object.assign({
            name: 'AuthorName',
            nullable: false,
            undefinable: false,
            maxLength: 50,
        }, validationRules));
        this.type = 'AuthorName';
    }
}
exports.AuthorName = AuthorName;
//# sourceMappingURL=author-name.js.map