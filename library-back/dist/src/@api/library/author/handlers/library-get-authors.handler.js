"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LibraryGetAuthorsHandler = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@aurorajs.dev/core");
const get_authors_query_1 = require("../../../../@app/library/author/application/get/get-authors.query");
let LibraryGetAuthorsHandler = class LibraryGetAuthorsHandler {
    constructor(queryBus) {
        this.queryBus = queryBus;
    }
    async main(queryStatement, constraint, timezone) {
        return await this.queryBus.ask(new get_authors_query_1.GetAuthorsQuery(queryStatement, constraint, {
            timezone,
        }));
    }
};
LibraryGetAuthorsHandler = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.IQueryBus])
], LibraryGetAuthorsHandler);
exports.LibraryGetAuthorsHandler = LibraryGetAuthorsHandler;
//# sourceMappingURL=library-get-authors.handler.js.map