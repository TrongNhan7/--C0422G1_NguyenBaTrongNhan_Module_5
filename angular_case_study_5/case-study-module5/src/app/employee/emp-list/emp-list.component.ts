import {Component, OnInit} from '@angular/core';
import {Employee} from '../../model/employee';
import {Education} from '../../model/education';
import {Division} from '../../model/division';
import {PositionEmployee} from '../../model/positionEmployee';
import {EmployeeService} from '../../service/employee.service';
import {PositionService} from '../../service/position.service';
import {EducationService} from '../../service/education.service';
import {DivisionService} from '../../service/division.service';

@Component({
  selector: 'app-emp-list',
  templateUrl: './emp-list.component.html',
  styleUrls: ['./emp-list.component.css']
})
export class EmpListComponent implements OnInit {
  employees: Employee[] = [];
  positions: PositionEmployee[] = [];
  educations: Education[] = [];
  divisions: Division[] = [];
  nameDelete: string;
  idDelete: number;
  keyword: string;
  divisionKey: string;
  positionKey: string;
  educationKey: string;


  constructor(private employeeService: EmployeeService, private positionService: PositionService,
              private educationService: EducationService, private divisionService: DivisionService) {
  }

  ngOnInit(): void {
    this.getAllEmployee();
    this.getAllPosition();
    this.getAllEducation();
    this.getAllDivision();
  }

  private getAllEmployee() {
    this.employeeService.getAllEmployee().subscribe(employees => {
      this.employees = employees;
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
  }

  private getAllDivision() {
    this.divisionService.getAll().subscribe(divisions => {
      this.divisions = divisions;
    });
  }

  getIdNameDelete(id: number, employee: string) {
    this.idDelete = id;
    this.nameDelete = employee;
  }

  delete() {
    this.employeeService.delete(this.idDelete).subscribe(() => {
      alert('Xóa thành công!!!');
      this.getAllEmployee();
    });
  }

  searchInput() {
    if (this.keyword === '') {
      return this.getAllEmployee();

    } else {
      this.employees = this.employees.filter(employee => {
        return (employee.name.toLowerCase().includes(this.keyword.toLowerCase())
          || employee.idCard.toLowerCase().includes(this.keyword.toLowerCase()));
      });
    }
    this.keyword = '';
    console.log(this.employees);
  }

  back() {
    this.getAllEmployee();
    this.getAllPosition();
    this.getAllEducation();
    this.getAllDivision();
    this.educationKey = '';
    this.positionKey = '';
    this.divisionKey = '';
  }

  getIdPositionSearch(event) {
    if (this.educationKey === '' && this.divisionKey === '') {
      this.employeeService.getAllEmployee().subscribe(employees => {
        this.employees = employees;
        this.positionKey = event.target.value;
        this.employees = this.employees.filter(employee => {
          return (employee.positionEmployee.name.includes(event.target.value));
        });
      });
      console.log('po');
    } else {
      this.employees = this.employees.filter(employee => {
        return (employee.positionEmployee.name.includes(event.target.value));
      });
    }
  }

  getIdEducationSearch(event) {
    if (this.positionKey === '' && this.divisionKey === '') {
      this.employeeService.getAllEmployee().subscribe(employees => {
        this.employees = employees;
        this.educationKey = event.target.value;
        this.employees = this.employees.filter(employee => {
          return (employee.education.name.includes(event.target.value));
        });
      });
    } else {
      this.employees = this.employees.filter(employee => {
        return (employee.education.name.includes(event.target.value));
      });
    }
  }

  getIdDivisionSearch(event) {
    if (this.positionKey === '' && this.educationKey === '') {
      this.employeeService.getAllEmployee().subscribe(employees => {
        this.employees = employees;
        this.divisionKey = event.target.value;
        this.employees = this.employees.filter(employee => {
          return (employee.division.name.includes(event.target.value));
        });
      });
    } else {
      this.employees = this.employees.filter(employee => {
        return (employee.division.name.includes(event.target.value));
      });
      console.log(this.employees);
    }
  }
}
