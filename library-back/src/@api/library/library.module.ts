import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { SharedModule } from '@aurora/shared.module';
import { LibrarySeeder } from './library.seeder';
import { LibraryModels, LibraryHandlers, LibraryServices, LibraryRepositories, LibrarySagas } from '../../@app/library';
import { LibraryAuthorControllers, LibraryAuthorResolvers, LibraryAuthorApiHandlers, LibraryAuthorServices } from './author';
import { LibraryBookControllers, LibraryBookResolvers, LibraryBookApiHandlers, LibraryBookServices } from './book';

@Module({
    imports: [
        SharedModule,
        SequelizeModule.forFeature([
                ...LibraryModels
            ])
    ],
    controllers: [
        ...LibraryAuthorControllers,
        ...LibraryBookControllers
    ],
    providers: [
        LibrarySeeder,
        ...LibraryHandlers,
        ...LibraryServices,
        ...LibraryRepositories,
        ...LibrarySagas,
        ...LibraryAuthorResolvers,
        ...LibraryAuthorApiHandlers,
        ...LibraryAuthorServices,
        ...LibraryBookResolvers,
        ...LibraryBookApiHandlers,
        ...LibraryBookServices
    ],
})
export class LibraryModule {}
