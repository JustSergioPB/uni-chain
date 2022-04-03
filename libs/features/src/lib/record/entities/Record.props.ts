import { Base, Id } from 'libs/core/src';

export interface RecordProps extends Base {
  subjectId: Id;
  studentId: Id;
  score: number;
}
