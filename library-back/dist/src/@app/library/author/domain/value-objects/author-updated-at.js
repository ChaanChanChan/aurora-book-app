"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthorUpdatedAt = void 0;
const core_1 = require("@aurorajs.dev/core");
class AuthorUpdatedAt extends core_1.TimestampValueObject {
    constructor(value, validationRules = {}, data = {}) {
        super(value, Object.assign({
            name: 'AuthorUpdatedAt',
            nullable: true,
            undefinable: true,
        }, validationRules), data);
        this.type = 'AuthorUpdatedAt';
    }
}
exports.AuthorUpdatedAt = AuthorUpdatedAt;
//# sourceMappingURL=author-updated-at.js.map