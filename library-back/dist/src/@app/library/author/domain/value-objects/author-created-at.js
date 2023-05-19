"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorCreatedAt = void 0;
const core_1 = require("@aurorajs.dev/core");
class AuthorCreatedAt extends core_1.TimestampValueObject {
    constructor(value, validationRules = {}, data = {}) {
        super(value, Object.assign({
            name: 'AuthorCreatedAt',
            nullable: true,
            undefinable: true,
        }, validationRules), data);
        this.type = 'AuthorCreatedAt';
    }
}
exports.AuthorCreatedAt = AuthorCreatedAt;
//# sourceMappingURL=author-created-at.js.map