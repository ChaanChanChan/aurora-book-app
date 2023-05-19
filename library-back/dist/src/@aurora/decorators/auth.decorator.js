"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Auth = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@aurorajs.dev/core");
function Auth(...permissions) {
    return (0, common_1.applyDecorators)((0, core_1.Permissions)(...permissions), (0, common_1.UseGuards)(core_1.AuthenticationDisabledAdapterGuard, core_1.AuthorizationDisabledAdapterGuard));
}
exports.Auth = Auth;
//# sourceMappingURL=auth.decorator.js.map