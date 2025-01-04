import { type IHome } from '../../interfaces/IHome.ts';
import { K6Request } from '../../interfaces/k6-request.ts';
import { BaseClient } from './base.ts';

export class Home extends BaseClient implements IHome {
  constructor() {
    super()
  }

  getHome(overrides?: Partial<K6Request>): K6Request {
    return {
      method: 'GET',
      url: this.baseUrl,
      body: null,
      params: {
        tags: { page: 'home' }
      },
      ...overrides
    }
  }
}
