import { SharedIterationsScenario } from 'k6/options';

export interface SharedIterationsOptions extends Partial<SharedIterationsScenario> {
  name: string;
  exec: string;
}

