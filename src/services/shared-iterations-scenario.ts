import { SharedIterationsScenario } from 'k6/options';
import { SharedIterationsOptions } from '../types/scenarios';

export function createSharedIterationsScenario(
  options: SharedIterationsOptions
): Record<string, SharedIterationsScenario> {
  return {
    [options.name]: {
      exec: options.exec ?? 'default',
      executor: 'shared-iterations',
      vus: options.vus ?? 1,
      iterations: options.iterations ?? 1,
      maxDuration: options.maxDuration ?? '1s',
    },
  };
}
