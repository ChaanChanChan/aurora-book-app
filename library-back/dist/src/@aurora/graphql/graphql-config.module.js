"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GraphQLConfigModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const path_1 = require("path");
const core_1 = require("@aurorajs.dev/core");
const hello_resolver_1 = require("./hello.resolver");
const graphql_type_json_1 = require("graphql-type-json");
let GraphQLConfigModule = class GraphQLConfigModule {
};
GraphQLConfigModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRootAsync({
                driver: apollo_1.ApolloDriver,
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    context: ({ req }) => ({ req }),
                    debug: configService.get('GRAPHQL_DEBUG') === 'true',
                    playground: configService.get('GRAPHQL_PLAYGROUND') === 'true',
                    typePaths: ['./**/*.graphql'],
                    resolvers: {
                        JSON: graphql_type_json_1.default,
                    },
                    definitions: configService.get('GRAPHQL_CREATE_DEFINITIONS') === 'true' ? {
                        path: (0, path_1.join)(process.cwd(), 'src/@api/graphql.ts'),
                    } : undefined,
                }),
                inject: [config_1.ConfigService],
            }),
        ],
        providers: [
            core_1.AnyScalar,
            core_1.UploadScalar,
            core_1.JsonScalar,
            hello_resolver_1.Hello,
        ],
        exports: [
            graphql_1.GraphQLModule,
        ],
    })
], GraphQLConfigModule);
exports.GraphQLConfigModule = GraphQLConfigModule;
//# sourceMappingURL=graphql-config.module.js.map