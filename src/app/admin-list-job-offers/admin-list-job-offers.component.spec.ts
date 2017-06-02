import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminListJobOffersComponent } from './admin-list-job-offers.component';

describe('AdminListJobOffersComponent', () => {
  let component: AdminListJobOffersComponent;
  let fixture: ComponentFixture<AdminListJobOffersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminListJobOffersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminListJobOffersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
