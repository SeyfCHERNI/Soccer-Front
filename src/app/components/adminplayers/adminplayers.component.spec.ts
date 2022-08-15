import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminplayersComponent } from './adminplayers.component';

describe('AdminplayersComponent', () => {
  let component: AdminplayersComponent;
  let fixture: ComponentFixture<AdminplayersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminplayersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminplayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
