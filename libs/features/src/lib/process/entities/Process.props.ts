import { Base } from 'libs/core/src';
import { ProcessStates } from '../types/process.states';
import { ProcessTypes } from '../types/process.types';

export interface ProcessProps extends Base {
  name: string;
  state: ProcessStates;
  type: ProcessTypes;
  startAt: Date;
  endAt: Date;
}
