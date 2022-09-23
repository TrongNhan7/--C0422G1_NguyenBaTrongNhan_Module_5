import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacCreateComponent } from './fac-create.component';

describe('FacCreateComponent', () => {
  let component: FacCreateComponent;
  let fixture: ComponentFixture<FacCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
