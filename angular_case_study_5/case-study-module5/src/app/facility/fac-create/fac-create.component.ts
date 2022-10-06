import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
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
    nameService: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]*(\\s[A-Z][a-zA-Z]*)*$')]),
    area: new FormControl('', [Validators.required, this.regexDouble]),
    cost: new FormControl('', [Validators.required, this.regexDouble]),
    maxPeople: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    standardRoom: new FormControl('', [Validators.required]),
    descriptionOtherConvenience: new FormControl('', [Validators.required]),
    areaPool: new FormControl('', [Validators.required, this.regexDouble]),
    numberOfFloors: new FormControl('', [Validators.required, Validators.pattern('^[1-9]\\d*$')]),
    freeService: new FormControl('', [Validators.required]),
    rentType: new FormControl('', [Validators.required]),
    facilityType: new FormControl('', [Validators.required])
  });
  facility: Facility;
  facilityType: FacilityType[] = [];
  rentType: RentType[] = [];
  showCreate: number;

  constructor(private facilityService: FacilityService, private facilityTypeService: FacilityTypeService,
              private rentTypeService: RentTypeService) {
  }

  ngOnInit(): void {
    this.facilityService.getAllFacilityType().subscribe(facilityType => {
      this.facilityType = facilityType;
    });
    this.facilityService.getAllRentType().subscribe(rentType => {
      this.rentType = rentType;
    });
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

  regexDouble(control: AbstractControl) {
    const valueDay = control.value;
    if (valueDay < 0) {
      return {doubleValidator: true};
    }
    return null;
  }
}
