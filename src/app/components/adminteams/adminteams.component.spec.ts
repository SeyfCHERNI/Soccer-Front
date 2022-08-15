import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminteamsComponent } from './adminteams.component';

describe('AdminteamsComponent', () => {
  let component: AdminteamsComponent;
  let fixture: ComponentFixture<AdminteamsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminteamsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminteamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
