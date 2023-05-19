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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeAuthorRepository = void 0;
const common_1 = require("@nestjs/common");
const sequelize_1 = require("@nestjs/sequelize");
const core_1 = require("@aurorajs.dev/core");
const author_mapper_1 = require("../../domain/author.mapper");
const sequelize_author_model_1 = require("./sequelize-author.model");
let SequelizeAuthorRepository = class SequelizeAuthorRepository extends core_1.SequelizeRepository {
    constructor(repository, criteria, auditingRunner) {
        super();
        this.repository = repository;
        this.criteria = criteria;
        this.auditingRunner = auditingRunner;
        this.aggregateName = 'LibraryAuthor';
        this.mapper = new author_mapper_1.AuthorMapper();
    }
};
SequelizeAuthorRepository = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, sequelize_1.InjectModel)(sequelize_author_model_1.LibraryAuthorModel)),
    __metadata("design:paramtypes", [Object, core_1.ICriteria,
        core_1.AuditingRunner])
], SequelizeAuthorRepository);
exports.SequelizeAuthorRepository = SequelizeAuthorRepository;
//# sourceMappingURL=sequelize-author.repository.js.map