import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsertJobOfferComponent } from './admin-insert-job-offer.component';

describe('AdminInsertJobOfferComponent', () => {
  let component: AdminInsertJobOfferComponent;
  let fixture: ComponentFixture<AdminInsertJobOfferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInsertJobOfferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInsertJobOfferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
