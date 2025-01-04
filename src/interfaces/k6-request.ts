import http from 'k6/http';

export interface K6Request {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';
  url: string;
  body?: http.RequestBody | null;
  params?: {
    headers?: Record<string, string>;
    redirects?: number;
    timeout?: string;
    tags?: Record<string, string>;
  };
}

