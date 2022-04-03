import { Id } from 'libs/core/src';
import { EquivalenceVo } from '../value-objects/equivalence.vo';
import { ProcessProps } from './Process.props';

export interface LearningAgreementProps extends ProcessProps {
  enrollmentId: Id;
  equivalences: EquivalenceVo[];
}
