import { Id } from 'libs/core/src';

export interface UserProps {
  email: string;
  password: string;
  name: string;
  surname: string;
  addressId: Id;
}
