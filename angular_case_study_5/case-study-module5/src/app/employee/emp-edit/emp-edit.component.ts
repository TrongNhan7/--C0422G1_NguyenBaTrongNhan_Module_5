import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Employee} from '../../model/employee';
import {Education} from '../../model/education';
import {Division} from '../../model/division';
import {PositionEmployee} from '../../model/positionEmployee';
import {EmployeeService} from '../../service/employee.service';
import {PositionService} from '../../service/position.service';
import {EducationService} from '../../service/education.service';
import {DivisionService} from '../../service/division.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emp-edit',
  templateUrl: './emp-edit.component.html',
  styleUrls: ['./emp-edit.component.css']
})
export class EmpEditComponent implements OnInit {
  employeeForm: FormGroup;
  employeeEdit: Employee;
  positions: PositionEmployee[] = [];
  educations: Education[] = [];
  divisions: Division[] = [];
  id: number;

  constructor(private employeeService: EmployeeService, private positionService: PositionService,
              private educationService: EducationService, private divisionService: DivisionService,
              private activatedRoute: ActivatedRoute, private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
    });
  }

  ngOnInit(): void {
    this.getAllPosition();
    this.getAllEducation();
    this.getAllDivision();
    this.employeeForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]*(\\s[A-Z][a-zA-Z]*)*$')]),
      birthday: new FormControl('', [Validators.required, this.regexBirthday]),
      idCard: new FormControl('', [Validators.pattern('^[0-9]{9,11}$')]),
      salary: new FormControl('', [Validators.required, this.regexDouble]),
      phoneNumber: new FormControl('', this.phoneValidator),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required]),
      positionEmployee: new FormControl('', [Validators.required]),
      education: new FormControl('', [Validators.required]),
      division: new FormControl('', [Validators.required])
    });
    this.employeeService.findById(this.id).subscribe(next => {
      this.employeeEdit = next;
      this.employeeForm.patchValue(this.employeeEdit);
      this.employeeForm.patchValue({
        division: this.employeeEdit.division.id,
        education: this.employeeEdit.education.id,
        positionEmployee: this.employeeEdit.positionEmployee.id
      });
      console.log(this.employeeForm.value);
    });
  }

  submit() {
    const employee = this.employeeForm.value;
    this.positionService.findById(employee.positionEmployee).subscribe(p => {
      employee.positionEmployee = p;
      this.educationService.findById(employee.education).subscribe(e => {
        employee.education = e;
        this.divisionService.findById(employee.division).subscribe(d => {
          employee.division = d;
          this.employeeService.edit(this.id, employee).subscribe(() => {
            Swal.fire('Edit thành công!');
            this.employeeForm.reset();
            this.route.navigateByUrl('employee/emp-list');
          });
        });
      });
    });
  }

  private getAllPosition() {
    this.positionService.getAll().subscribe(positions => {
      this.positions = positions;
    });
  }

  private getAllEducation() {
    this.educationService.getAll().subscribe(educations => {
      this.educations = educations;
    });
    console.log(this.educations);
  }

  private getAllDivision() {
    this.divisionService.getAll().subscribe(divisions => {
      this.divisions = divisions;
    });
  }

  regexBirthday(control: AbstractControl): ValidationErrors | null {
    const valueDay = control.value;
    const current = new Date().getFullYear();
    const birthday = new Date(valueDay).getFullYear();
    const age = current - birthday;
    if (isNaN(age)) {
      return {ageFalse: true};
    }
    if (age < 18) {
      return {ageFalse: true};
    }
    return null;
  }

  phoneValidator(control: AbstractControl) {
    const phoneRegex = new RegExp('^(090|091)[0-9]{7}$');
    if (phoneRegex.test(control.value)) {
      return null;
    } else {
      return {phoneValidator: true};
    }
  }

  regexDouble(control: AbstractControl) {
    const valueDay = control.value;
    if (valueDay < 0) {
      return {doubleValidator: true};
    }
    return null;
  }


}
