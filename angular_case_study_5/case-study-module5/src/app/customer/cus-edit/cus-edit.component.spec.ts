import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CusEditComponent } from './cus-edit.component';

describe('CusEditComponent', () => {
  let component: CusEditComponent;
  let fixture: ComponentFixture<CusEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CusEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CusEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
