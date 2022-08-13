import { Injectable } from '@nestjs/common'

@Injectable()
export class TestService {
	hello1(): string {
		return 'Hello World! - Service 1'
	}
}
