import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmatchesComponent } from './adminmatches.component';

describe('AdminmatchesComponent', () => {
  let component: AdminmatchesComponent;
  let fixture: ComponentFixture<AdminmatchesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminmatchesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminmatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
