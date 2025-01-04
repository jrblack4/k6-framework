import { K6Request } from "./k6-request.ts";

export interface IHome {
  getHome(overrides?: Partial<K6Request>): K6Request;
}
