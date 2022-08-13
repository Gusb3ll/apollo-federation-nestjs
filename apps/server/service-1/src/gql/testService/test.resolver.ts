import { Query, Resolver } from '@nestjs/graphql'
import { TestService } from './test.service'

@Resolver()
export class TestResolver {
	constructor(private service: TestService) {}

	@Query(() => String)
	hello1(): string {
		return this.service.hello1()
	}
}
