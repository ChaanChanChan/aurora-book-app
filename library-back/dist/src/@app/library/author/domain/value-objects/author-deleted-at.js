"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorDeletedAt = void 0;
const core_1 = require("@aurorajs.dev/core");
class AuthorDeletedAt extends core_1.TimestampValueObject {
    constructor(value, validationRules = {}, data = {}) {
        super(value, Object.assign({
            name: 'AuthorDeletedAt',
            nullable: true,
            undefinable: true,
        }, validationRules), data);
        this.type = 'AuthorDeletedAt';
    }
}
exports.AuthorDeletedAt = AuthorDeletedAt;
//# sourceMappingURL=author-deleted-at.js.map