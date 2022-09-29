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

  constructor(private facilityService: FacilityService) {

  }

  ngOnInit(): void {
    this.facilities = this.facilityService.getAll();
  }

}
