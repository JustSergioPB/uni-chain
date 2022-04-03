import { Id } from 'libs/core/src';
import { UserProps } from '../../user/entities/User.props';

export interface StudentProps extends UserProps {
  recordIds: Id[];
  certificationIds: Id[];
  languageIds: Id[];
}
