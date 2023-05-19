/* eslint-disable indent */
/* eslint-disable key-spacing */
import { Column, Model, Table, ForeignKey, BelongsTo, HasMany, BelongsToMany, HasOne } from 'sequelize-typescript';
import { DataTypes } from 'sequelize';
import { LibraryAuthorModel } from '@app/library/author/infrastructure/sequelize/sequelize-author.model';

@Table({
    modelName: 'LibraryBook',
    freezeTableName: true,
    timestamps: false,
})
export class LibraryBookModel extends Model<LibraryBookModel>
{
    @Column({
        field: 'id',
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID,
    })
    id: string;

    @Column({
        field: 'title',
        allowNull: false,
        type: DataTypes.STRING(50),
    })
    title: string;

    @Column({
        field: 'publishedAt',
        allowNull: false,
        type: DataTypes.DATE,
    })
    publishedAt: string;

    @Column({
        field: 'price',
        allowNull: false,
        type: DataTypes.INTEGER.UNSIGNED,
    })
    price: number;

    @ForeignKey(() => LibraryAuthorModel)
    @Column({
        field: 'authorId',
        allowNull: false,
        type: DataTypes.UUID,
    })
    authorId: string;

    @BelongsTo(() => LibraryAuthorModel, {
        constraints: false,
        foreignKey: 'authorId',
    })
    author: LibraryAuthorModel;

    @Column({
        field: 'createdAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    createdAt: string;

    @Column({
        field: 'updatedAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    updatedAt: string;

    @Column({
        field: 'deletedAt',
        allowNull: true,
        type: DataTypes.DATE,
    })
    deletedAt: string;

}