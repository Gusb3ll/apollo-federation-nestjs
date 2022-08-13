import { Injectable } from '@nestjs/common'

@Injectable()
export class TestService {
	hello2(): string {
		return 'Hello World! - Service 2'
	}
}
