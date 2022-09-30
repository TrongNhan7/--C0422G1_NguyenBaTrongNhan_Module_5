import {Injectable} from '@angular/core';
import {FacilityType} from '../model/facility-type';

@Injectable({
  providedIn: 'root'
})
export class FacilityTypeService {
  facilityTypes: FacilityType[] = [
    {id: 1, name: 'Villa'},
    {id: 2, name: 'House'},
    {id: 3, name: 'Room'}
  ];

  constructor() {
  }

  getAll() {
    return this.facilityTypes;
  }

  findById(id: number): FacilityType {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.facilityTypes.length; i++) {
      if ((this.facilityTypes)[i].id === id) {
        return this.facilityTypes[i];
      }
    }
    return null;
  }
}
