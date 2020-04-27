import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatmentOverviewComponent } from './depatment-overview.component';

describe('DepatmentOverviewComponent', () => {
  let component: DepatmentOverviewComponent;
  let fixture: ComponentFixture<DepatmentOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepatmentOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepatmentOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
