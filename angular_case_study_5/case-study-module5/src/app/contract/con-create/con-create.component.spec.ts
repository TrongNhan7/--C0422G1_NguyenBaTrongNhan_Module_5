import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConCreateComponent } from './con-create.component';

describe('ConCreateComponent', () => {
  let component: ConCreateComponent;
  let fixture: ComponentFixture<ConCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
