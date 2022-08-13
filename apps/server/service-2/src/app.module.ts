import {
	ApolloFederationDriver,
	ApolloFederationDriverConfig
} from '@nestjs/apollo'
import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'

import { TestModule } from './gql/testService/test.module'

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloFederationDriverConfig>({
			driver: ApolloFederationDriver,
			autoSchemaFile: true,
			playground: false,
			plugins: [ApolloServerPluginLandingPageLocalDefault()]
		}),
		TestModule
	]
})
export class AppModule {}
