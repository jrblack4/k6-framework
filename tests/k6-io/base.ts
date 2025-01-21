export abstract class BaseClient {
  protected readonly baseUrl: string;

  constructor() {
    this.baseUrl = __ENV.BASE_URL;
  }
}
