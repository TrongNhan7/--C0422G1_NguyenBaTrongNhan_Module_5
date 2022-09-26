import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';


@Component({
  selector: 'app-fac-list',
  templateUrl: './fac-list.component.html',
  styleUrls: ['./fac-list.component.css']
})
export class FacListComponent implements OnInit {
  facilities: Facility[] = [
    {
      id: 1,
      name: 'Villa super Vip I',
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
      name: 'Villa super Vip II',
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
      name: 'Villa super Vip III',
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
      name: 'House royal I',
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
      id: 4,
      name: 'House royal II',
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
      id: 4,
      name: 'House royal III',
      area: 700,
      cost: 50,
      maxPeople: 7,
      standardRoom: 'Vip X 10',
      descriptionOtherConvenience: 'Phòng để Tài trap mấy em gái mới lớn',
      numberOfFloors: 1,
      rentType: {id: 4, name: 'hour'},
      facilityType: {id: 2, name: 'House'}
    },


  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
