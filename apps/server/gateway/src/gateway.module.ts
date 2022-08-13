import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { IntrospectAndCompose } from '@apollo/gateway'
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core'
import { ApolloGatewayDriver, ApolloGatewayDriverConfig } from '@nestjs/apollo'

@Module({
	imports: [
		GraphQLModule.forRoot<ApolloGatewayDriverConfig>({
			driver: ApolloGatewayDriver,
			server: {
				cors: true,
				playground: false,
				plugins: [ApolloServerPluginLandingPageLocalDefault()]
			},
			gateway: {
				supergraphSdl: new IntrospectAndCompose({
					subgraphs: [
						{ name: 'service-1', url: 'http://localhost:4001/graphql' },
						{ name: 'service-2', url: 'http://localhost:4002/graphql' }
					]
				})
			}
		})
	]
})
export class GatewayModule {}
