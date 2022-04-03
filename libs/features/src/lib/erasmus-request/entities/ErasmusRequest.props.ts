import { Id } from 'libs/core/src';
import { ProcessProps } from '../../process/entities/Process.props';

export interface ErasmusRequest extends ProcessProps {
  studentId: Id;
  annoucementId: Id;
}