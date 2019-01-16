import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileAccueilComponent } from './profile-accueil.component';

describe('ProfileAccueilComponent', () => {
  let component: ProfileAccueilComponent;
  let fixture: ComponentFixture<ProfileAccueilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfileAccueilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
