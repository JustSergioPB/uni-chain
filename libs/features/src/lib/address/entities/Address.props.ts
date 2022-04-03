import { Base } from 'libs/core/src';
import { AddressTypes } from '../types/address.types';

export interface AddressProps extends Base {
  wayType: AddressTypes;
  address: string;
  portal: string;
  floor: string;
  door: string;
  city: string;
  region: string;
  country: string;
  postalCode: string;
}
