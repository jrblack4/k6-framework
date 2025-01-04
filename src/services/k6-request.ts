import http, { Response } from 'k6/http';
import type { K6Request } from '../interfaces/k6-request.ts';

export function makeRequest(request: K6Request): Response {
  const { method, url, body, params } = request;

  return http.request(method, url, body, params);
}
