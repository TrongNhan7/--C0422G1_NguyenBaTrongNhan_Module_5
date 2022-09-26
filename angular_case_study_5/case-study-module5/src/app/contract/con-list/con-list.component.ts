import {Component, OnInit} from '@angular/core';
import {Contract} from '../../model/contract';

@Component({
  selector: 'app-con-list',
  templateUrl: './con-list.component.html',
  styleUrls: ['./con-list.component.css']
})
export class ConListComponent implements OnInit {
  contracts: Contract[] = [
    {
      id: 1,
      startDate: '12/10/2022',
      endDate: '15/10/2022',
      deposit: 200,
      total: 2000,
      customer: {
        id: 1,
        name: 'Hùng hay kẻ',
        birthday: '12/10/2001',
        gender: 'Nam',
        idCard: '6969696969',
        phone: '0905000000',
        email: 'Hungthichbay@gmail.com',
        customerType: {id: 1, name: 'Diamond'},
        address: 'Cái nhà giàu nhất Quận 3, Đà Nẵng'
      },
      facility: {
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
      }
    }
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
