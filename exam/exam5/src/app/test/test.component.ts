import {Component, OnInit} from '@angular/core';
import {Test} from "../model/test";
import {TestService} from "../service/test.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  tests: Test[] = [];

  constructor(private testService: TestService) {
  }

  ngOnInit(): void {
    this.testService.getAll().subscribe(tests => {
      this.tests = tests;
    })
  }

}
