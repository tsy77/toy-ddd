import { Inject, HTTPController, HTTPMethod, HTTPMethodEnum, HTTPQuery, HTTPBody } from '@eggjs/tegg';
import { HelloService } from '@/module/foo';
import { CreateUserRequest } from './request';

@HTTPController({
  path: '/bar',
})
export class UserController {
  @Inject()
  helloService: HelloService;

  @HTTPMethod({
    method: HTTPMethodEnum.GET,
    path: 'user',
  })
  async createUser(request: CreateUserRequest) {
    return await this.helloService.hello(request.name);
  }
}
