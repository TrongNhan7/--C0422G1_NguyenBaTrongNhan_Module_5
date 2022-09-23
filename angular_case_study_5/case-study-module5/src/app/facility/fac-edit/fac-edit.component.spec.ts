import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacEditComponent } from './fac-edit.component';

describe('FacEditComponent', () => {
  let component: FacEditComponent;
  let fixture: ComponentFixture<FacEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
