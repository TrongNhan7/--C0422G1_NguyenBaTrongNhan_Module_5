import {Injectable} from '@angular/core';
import {RentType} from '../model/rent-type';


@Injectable({
  providedIn: 'root'
})
export class RentTypeService {
  rentTypes: RentType[] = [
    {id: 1, name: 'Year'},
    {id: 2, name: 'House'},
    {id: 3, name: 'Day'},
    {id: 4, name: 'Hour'}
  ];

  constructor() {
  }

  getAll() {
    return this.rentTypes;
  }

  findById(id: number): RentType {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.rentTypes.length; i++) {
      if ((this.rentTypes)[i].id === id) {
        return this.rentTypes[i];
      }
    }
    return null;
  }
}
