import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from '@angular/forms';
import {Education} from '../../model/education';
import {Division} from '../../model/division';
import {EmployeeService} from '../../service/employee.service';
import {Router} from '@angular/router';
import {PositionService} from '../../service/position.service';
import {EducationService} from '../../service/education.service';
import {DivisionService} from '../../service/division.service';
import {PositionEmployee} from '../../model/positionEmployee';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-emp-create',
  templateUrl: './emp-create.component.html',
  styleUrls: ['./emp-create.component.css']
})
export class EmpCreateComponent implements OnInit {
  employeeForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]*(\\s[A-Z][a-zA-Z]*)*$')]),
    birthday: new FormControl('', [Validators.required, this.regexDate]),
    idCard: new FormControl('', [Validators.pattern('^[0-9]{9,11}$')]),
    salary: new FormControl('', [Validators.required, this.regexDouble]),
    phoneNumber: new FormControl('', this.phoneValidator),
    email: new FormControl('', [Validators.required, Validators.email]),
    address: new FormControl('', [Validators.required]),
    positionEmployee: new FormControl('', [Validators.required]),
    education: new FormControl('', [Validators.required]),
    division: new FormControl('', [Validators.required])
  });
  positions: PositionEmployee[] = [];
  educations: Education[] = [];
  divisions: Division[] = [];


  constructor(private employeeService: EmployeeService, private positionService: PositionService,
              private educationService: EducationService, private divisionService: DivisionService, private route: Router) {
  }

  ngOnInit(): void {
    this.getAllPosition();
    this.getAllEducation();
    this.getAllDivision();
  }


  private getAllPosition() {
    this.positionService.getAll().subscribe(positions => {
      this.positions = positions;
      console.log(this.positions);
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

  submit() {
    const employee = this.employeeForm.value;
    this.positionService.findById(employee.positionEmployee).subscribe(p => {
      employee.positionEmployee = p;
      this.educationService.findById(employee.education).subscribe(e => {
        employee.education = e;
        this.divisionService.findById(employee.division).subscribe(d => {
          employee.division = d;
          this.employeeService.add(employee).subscribe(() => {
            Swal.fire('Thêm mới thành công');
            this.employeeForm.reset();
            this.route.navigateByUrl('employee/emp-list');
          });
        });
      });
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

  regexDate(control: AbstractControl) {
    const value = control.value;
    const current = new Date();
    const dateInput = new Date(value);

    if (dateInput.getFullYear() - current.getFullYear() < 0) {
      return {dateFalse: true};
    } else if (dateInput.getFullYear() - current.getFullYear() > 0) {
      return null;
    } else {
      if (dateInput.getMonth() - current.getMonth() < 0) {
        return {dateFalse: true};
      } else if (dateInput.getMonth() - current.getMonth() > 0) {
        return null;
      } else {
        if (dateInput.getDate() - current.getDate() < 0) {
          return {dateFalse: true};
        } else {
          return null;
        }
      }
    }
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
