import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NhaXeComponent } from './nha-xe.component';

describe('NhaXeComponent', () => {
  let component: NhaXeComponent;
  let fixture: ComponentFixture<NhaXeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NhaXeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NhaXeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
