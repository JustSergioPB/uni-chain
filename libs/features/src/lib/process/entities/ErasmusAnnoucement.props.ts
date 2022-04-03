import { Id } from 'libs/core/src';
import { RequirementVo } from '../value-objects/requirement.vo';
import { ProcessProps } from './Process.props';

export interface ErasmusAnnouncementProps extends ProcessProps {
  destinyUniversityId: Id;
  requirements: RequirementVo[];
  certificationId: Id;
}
