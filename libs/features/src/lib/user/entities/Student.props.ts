import { Id } from 'libs/core/src';
import { UserProps } from './User.props';

export interface StudentProps extends UserProps {
  recordIds: Id[];
  certificationIds: Id[];
  languageIds: Id[];
}
