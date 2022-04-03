import { Base, Id } from 'libs/core/src';
import { CertificationTypes } from '../types/certification.types';

export interface CertificationProps extends Base {
  name: string;
  maxPlaces: number;
  type: CertificationTypes;
  universityId: Id;
}
