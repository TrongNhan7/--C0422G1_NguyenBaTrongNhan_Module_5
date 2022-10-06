import {Component, OnInit} from '@angular/core';
import {FacilityService} from '../../service/facility.service';
import {Facility} from '../../model/facility';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-fac-detail',
  templateUrl: './fac-detail.component.html',
  styleUrls: ['./fac-detail.component.css']
})
export class FacDetailComponent implements OnInit {
  facility: Facility;

  constructor(private facilityService: FacilityService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.facilityService.findByIdRest(+paramMap.get('id')).subscribe(facility => {
        this.facility = facility;
        console.log(this.facility);
      });
    });
  }
}
