import { AuditingRunner, ICriteria, SequelizeRepository } from '@aurorajs.dev/core';
import { IAuthorRepository } from '../../domain/author.repository';
import { LibraryAuthor } from '../../domain/author.aggregate';
import { AuthorMapper } from '../../domain/author.mapper';
import { LibraryAuthorModel } from './sequelize-author.model';
export declare class SequelizeAuthorRepository extends SequelizeRepository<LibraryAuthor, LibraryAuthorModel> implements IAuthorRepository {
    readonly repository: typeof LibraryAuthorModel;
    readonly criteria: ICriteria;
    readonly auditingRunner: AuditingRunner;
    readonly aggregateName: string;
    readonly mapper: AuthorMapper;
    constructor(repository: typeof LibraryAuthorModel, criteria: ICriteria, auditingRunner: AuditingRunner);
}
