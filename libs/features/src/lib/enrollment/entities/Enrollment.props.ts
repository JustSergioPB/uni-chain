import { Id } from 'libs/core/src';
import { ProcessProps } from '../../process/entities/Process.props';

export interface EnrollmentProps extends ProcessProps {
  studentId: string;
  year: number;
  course: string;
  certificationId: Id;
  subjectIds: Id[];
  universityId: Id;
}
