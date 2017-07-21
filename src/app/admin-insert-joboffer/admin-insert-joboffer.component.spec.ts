import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminInsertJobofferComponent } from './admin-insert-joboffer.component';

describe('AdminInsertJobofferComponent', () => {
  let component: AdminInsertJobofferComponent;
  let fixture: ComponentFixture<AdminInsertJobofferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminInsertJobofferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminInsertJobofferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
