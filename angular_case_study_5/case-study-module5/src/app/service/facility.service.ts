import {Injectable} from '@angular/core';
import {Facility} from '../model/facility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilities: Facility[] = [
    {
      id: 1,
      nameService: 'Villa super Vip I',
      area: 200,
      cost: 10,
      maxPeople: 5,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Phòng bay lắc cho Hùng',
      areaPool: 2000,
      numberOfFloors: 2,
      rentType: {id: 1, name: 'year'},
      facilityType: {id: 1, name: 'Villa'}
    },
    {
      id: 2,
      nameService: 'Villa super Vip II',
      area: 500,
      cost: 20,
      maxPeople: 10,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Phòng bay lắc cho Huy và đồng bọn',
      areaPool: 5000,
      numberOfFloors: 3,
      rentType: {id: 2, name: 'Month'},
      facilityType: {id: 1, name: 'Villa'}
    },
    {
      id: 3,
      nameService: 'Villa super Vip III',
      area: 700,
      cost: 50,
      maxPeople: 7,
      standardRoom: 'Vip',
      descriptionOtherConvenience: 'Phòng bay lắc cho Trường và người tình đồng tính',
      areaPool: 2500,
      numberOfFloors: 1,
      rentType: {id: 3, name: 'day'},
      facilityType: {id: 1, name: 'Villa'}
    },
    {
      id: 4,
      nameService: 'House royal I',
      area: 700,
      cost: 50,
      maxPeople: 7,
      standardRoom: 'Super Vip',
      descriptionOtherConvenience: 'Phòng bay lắc cho Thái và người tình đồng tính',
      numberOfFloors: 1,
      rentType: {id: 4, name: 'hour'},
      facilityType: {id: 2, name: 'House'}
    },
    {
      id: 5,
      nameService: 'House royal II',
      area: 700,
      cost: 50,
      maxPeople: 7,
      standardRoom: 'Super Super Super Vip',
      descriptionOtherConvenience: 'Phòng đi ỉa cho Huy',
      numberOfFloors: 1,
      rentType: {id: 4, name: 'hour'},
      facilityType: {id: 2, name: 'House'}
    },
    {
      id: 6,
      nameService: 'Room super super Vip Pro I',
      area: 700,
      cost: 50,
      maxPeople: 7,
      freeService: 'Co cai bua',
      rentType: {id: 4, name: 'hour'},
      facilityType: {id: 3, name: 'Room'}
    },


  ];

  constructor(private httpClient: HttpClient) {
  }

  getAllFacility(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/facilityRest');
  }

  findByIdRest(id: number): Observable<any> {
    return this.httpClient.get('http://localhost:8080/facilityRest/' + id);
  }

  getAll() {
    return this.facilities;
  }

  saveFacility(facility: Facility) {
    return this.httpClient.post('http://localhost:8080/facilityRest', facility);
  }

  getAllFacilityType(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/facility/facilityType');
  }

  getAllRentType(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/facility/rentType');
  }

  getFacilityById(id: number): Facility {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.facilities.length; i++) {
      if (this.facilities[i].id === id) {
        return this.facilities[i];
      }
    }
    return null;
  }

  getId(): number {
    let id = 0;
    let max = 0;
    if (this.facilities == null) {
      return id = 1;
    } else {
      for (const facility of this.facilities) {
        if (facility.id > max) {
          max = facility.id;
        }
      }
    }
    return id = max + 1;
  }

  editFacility(facility: Facility): void {
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.facilities.length; i++) {
      if (this.facilities[i].id === facility.id) {
        this.facilities.splice(i, 1, facility);
      }
    }
  }

  deleteById(id: number) {
    for (let i = 0; i < this.facilities.length; i++) {
      if (this.facilities[i].id === id) {
        this.facilities.splice(i, 1);
      }
    }
  }
}
