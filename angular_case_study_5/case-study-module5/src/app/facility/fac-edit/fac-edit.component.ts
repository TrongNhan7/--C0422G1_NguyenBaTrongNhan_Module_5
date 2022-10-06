import {Component, OnInit} from '@angular/core';
import {Facility} from '../../model/facility';
import {FormControl, FormGroup} from '@angular/forms';
import {FacilityType} from '../../model/facility-type';
import {RentType} from '../../model/rent-type';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FacilityService} from '../../service/facility.service';
import {FacilityTypeService} from '../../service/facility-type.service';
import {RentTypeService} from '../../service/rent-type.service';

@Component({
  selector: 'app-fac-edit',
  templateUrl: './fac-edit.component.html',
  styleUrls: ['./fac-edit.component.css']
})
export class FacEditComponent implements OnInit {
  facility: Facility;
  facilityForm: FormGroup;
  facilityType: FacilityType[] = [];
  rentType: RentType[] = [];
  showEdit: number;

  constructor(private activatedRoute: ActivatedRoute, private facilityService: FacilityService,
              private facilityTypeService: FacilityTypeService, private rentTypeService: RentTypeService,
              private router: Router) {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.facility = this.facilityService.getFacilityById(+paramMap.get('id'));
    });
    this.facilityType = this.facilityTypeService.getAll();
    this.rentType = this.rentTypeService.getAll();
    this.showEdit = this.facility.facilityType.id;
    this.facilityForm = new FormGroup({
      id: new FormControl(this.facility.id),
      name: new FormControl(this.facility.nameService),
      area: new FormControl(this.facility.area),
      cost: new FormControl(this.facility.cost),
      maxPeople: new FormControl(this.facility.maxPeople),
      standardRoom: new FormControl(this.facility.standardRoom),
      descriptionOtherConvenience: new FormControl(this.facility.descriptionOtherConvenience),
      areaPool: new FormControl(this.facility.areaPool),
      numberOfFloors: new FormControl(this.facility.numberOfFloors),
      freeService: new FormControl(this.facility.freeService),
      rentType: new FormControl(this.facility.rentType.id),
      facilityType: new FormControl(this.facility.facilityType.id)
    });
  }

  submit() {
    this.facility = this.facilityForm.value;
    this.facility.facilityType = this.facilityTypeService.findById(this.facilityForm.value.facilityType);
    this.facility.rentType = this.rentTypeService.findById(this.facilityForm.value.rentType);
    this.facilityService.editFacility(this.facility);
    this.router.navigateByUrl('facility/fac-list');
  }
}
