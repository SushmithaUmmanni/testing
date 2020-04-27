import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepatmentContactComponent } from './depatment-contact.component';

describe('DepatmentContactComponent', () => {
  let component: DepatmentContactComponent;
  let fixture: ComponentFixture<DepatmentContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepatmentContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepatmentContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
