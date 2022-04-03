import { Id } from 'libs/core/src';
import { ProcessProps } from '../../process/entities/Process.props';
import { RequirementVo } from '../object-value/requirement.vo';

export interface ErasmusAnnouncementProps extends ProcessProps {
  destinyUniversityId: Id;
  requirements: RequirementVo[];
  certificationId: Id;
  candidateIds: Id[];
  sourceManagerId: Id;
  destinyManagerId: Id;
}
