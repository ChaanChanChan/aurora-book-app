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
exports.LibraryBookModel = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const sequelize_1 = require("sequelize");
const sequelize_author_model_1 = require("../../../author/infrastructure/sequelize/sequelize-author.model");
let LibraryBookModel = class LibraryBookModel extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'id',
        primaryKey: true,
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
    }),
    __metadata("design:type", String)
], LibraryBookModel.prototype, "id", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'title',
        allowNull: false,
        type: sequelize_1.DataTypes.STRING(50),
    }),
    __metadata("design:type", String)
], LibraryBookModel.prototype, "title", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'publishedAt',
        allowNull: false,
        type: sequelize_1.DataTypes.DATE,
    }),
    __metadata("design:type", String)
], LibraryBookModel.prototype, "publishedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'price',
        allowNull: false,
        type: sequelize_1.DataTypes.INTEGER.UNSIGNED,
    }),
    __metadata("design:type", Number)
], LibraryBookModel.prototype, "price", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => sequelize_author_model_1.LibraryAuthorModel),
    (0, sequelize_typescript_1.Column)({
        field: 'authorId',
        allowNull: false,
        type: sequelize_1.DataTypes.UUID,
    }),
    __metadata("design:type", String)
], LibraryBookModel.prototype, "authorId", void 0);
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => sequelize_author_model_1.LibraryAuthorModel, {
        constraints: false,
        foreignKey: 'authorId',
    }),
    __metadata("design:type", sequelize_author_model_1.LibraryAuthorModel)
], LibraryBookModel.prototype, "author", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'createdAt',
        allowNull: true,
        type: sequelize_1.DataTypes.DATE,
    }),
    __metadata("design:type", String)
], LibraryBookModel.prototype, "createdAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'updatedAt',
        allowNull: true,
        type: sequelize_1.DataTypes.DATE,
    }),
    __metadata("design:type", String)
], LibraryBookModel.prototype, "updatedAt", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'deletedAt',
        allowNull: true,
        type: sequelize_1.DataTypes.DATE,
    }),
    __metadata("design:type", String)
], LibraryBookModel.prototype, "deletedAt", void 0);
LibraryBookModel = __decorate([
    (0, sequelize_typescript_1.Table)({
        modelName: 'LibraryBook',
        freezeTableName: true,
        timestamps: false,
    })
], LibraryBookModel);
exports.LibraryBookModel = LibraryBookModel;
//# sourceMappingURL=sequelize-book.model.js.map