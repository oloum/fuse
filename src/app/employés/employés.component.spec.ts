import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployésComponent } from './employés.component';

describe('EmployésComponent', () => {
  let component: EmployésComponent;
  let fixture: ComponentFixture<EmployésComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployésComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployésComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
