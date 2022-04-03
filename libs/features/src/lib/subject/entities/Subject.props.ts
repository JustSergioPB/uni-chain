import { Base, Id } from 'libs/core/src';
import { SubjectTypes } from '../types/subject.types';

export interface SubjectProps extends Base {
  credits: number;
  universityId: Id;
  type: SubjectTypes;
}
