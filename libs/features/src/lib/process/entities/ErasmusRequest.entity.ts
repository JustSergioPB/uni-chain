import { Id } from 'libs/core/src';
import { ProcessProps } from './Process.props';

export interface ErasmusRequest extends ProcessProps {
  studentId: Id;
  annoucementId: Id;
}
