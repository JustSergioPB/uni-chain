import { Base, Id } from 'libs/core/src';

export interface DepartmentProps extends Base {
  name: string;
  addressId: Id;
  universityId: Id;
}
