import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FacilityService} from '../../service/facility.service';


@Component({
  selector: 'app-fac-list',
  templateUrl: './fac-list.component.html',
  styleUrls: ['./fac-list.component.css']
})
export class FacListComponent implements OnInit {
  facilities: Facility[] = [];
  idDelete: number;
  nameDelete: string;

  constructor(private facilityService: FacilityService) {

  }

  ngOnInit(): void {
    this.facilities = this.facilityService.getAll();
  }

  getIdNameDelete(id: number, name: string) {
    this.idDelete = id;
    this.nameDelete = name;
  }

  deleteFacility() {
    this.facilityService.deleteById(this.idDelete);
    alert('Delete thành công!!!');
  }
}
