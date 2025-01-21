import { Options } from 'k6/options'

export interface Scenario {
  options: Options;
  defaultFunction: () => void;
}
