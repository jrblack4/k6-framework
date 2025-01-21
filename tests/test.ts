import { makeRequest } from '../src/services/k6-request.ts';
import { Home } from './k6-io/home.ts';
import { createSharedIterationsScenario } from '../src/services/shared-iterations-scenario.ts'
import { Options } from 'k6/options';


export const options: Options = {
scenarios: createSharedIterationsScenario({ name: 'getHome', exec: 'getHome', vus: 2, iterations: 5 })
}

export function getHome(): void {
  makeRequest(new Home().getHome());
}
