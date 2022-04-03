import { Base, Id } from 'libs/core/src';

export interface RecordProps extends Base {
  subjectId: Id;
  enrollmentId: Id;
  studentId: Id;
  score: number;
}
