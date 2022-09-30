import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Facility} from '../../model/facility';
import {FacilityType} from '../../model/facility-type';
import {RentType} from '../../model/rent-type';
import {FacilityService} from '../../service/facility.service';
import {FacilityTypeService} from '../../service/facility-type.service';
import {RentTypeService} from '../../service/rent-type.service';

@Component({
  selector: 'app-fac-create',
  templateUrl: './fac-create.component.html',
  styleUrls: ['./fac-create.component.css']
})
export class FacCreateComponent implements OnInit {
  facilityForm: FormGroup = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    area: new FormControl(),
    cost: new FormControl(),
    maxPeople: new FormControl(),
    standardRoom: new FormControl(),
    descriptionOtherConvenience: new FormControl(),
    areaPool: new FormControl(),
    numberOfFloors: new FormControl(),
    freeService: new FormControl(),
    rentType: new FormControl(),
    facilityType: new FormControl()
  });
  facility: Facility;
  facilityType: FacilityType[] = [];
  rentType: RentType[] = [];
  showCreate: number;

  constructor(private facilityService: FacilityService, private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService) {
  }

  ngOnInit(): void {
    this.facilityType = this.facilityTypeService.getAll();
    this.rentType = this.rentTypeService.getAll();
  }

  submit() {
    this.facility = this.facilityForm.value;
    this.facility.rentType = this.rentTypeService.findById(this.facilityForm.value.rentType);
    this.facility.facilityType = this.facilityTypeService.findById(this.facilityForm.value.facilityType);
    this.facility.id = this.facilityService.getId();
    this.facilityService.saveFacility(this.facility);
    console.log(this.facility);
    this.facilityForm.reset();
  }

  changeFacilityType(event) {
    this.showCreate = event.target.value.charAt(event.target.value.length - 1);
  }
}
