import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacListComponent } from './fac-list.component';

describe('FacListComponent', () => {
  let component: FacListComponent;
  let fixture: ComponentFixture<FacListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
