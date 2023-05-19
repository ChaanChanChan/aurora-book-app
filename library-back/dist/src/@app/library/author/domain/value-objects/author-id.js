"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorId = void 0;
const core_1 = require("@aurorajs.dev/core");
class AuthorId extends core_1.UuidValueObject {
    constructor(value, validationRules = {}, data = {}) {
        super(value, Object.assign({
            name: 'AuthorId',
            nullable: false,
            undefinable: false,
            length: 36,
        }, validationRules), data);
        this.type = 'AuthorId';
    }
}
exports.AuthorId = AuthorId;
//# sourceMappingURL=author-id.js.map