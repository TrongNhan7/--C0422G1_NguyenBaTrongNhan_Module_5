import {Education} from './education';
import {Division} from './division';
import {PositionEmployee} from './positionEmployee';

export interface Employee {
  id?: number;
  name?: string;
  birthday?: string;
  idCard?: string;
  salary?: number;
  phoneNumber?: string;
  email?: string;
  address?: string;
  positionEmployee?: PositionEmployee;
  education?: Education;
  division?: Division;
}
