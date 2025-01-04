import { makeRequest } from './src/services/k6-request.ts';
import { Home } from './src/clients/k6-io/home.ts';

export const options = {
  vus: 1,
  duration: '1s',
};

export default () => {
  makeRequest(new Home().getHome());
}
