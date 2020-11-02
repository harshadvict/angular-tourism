import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SerchedHotelComponent } from './serched-hotel.component';

describe('SerchedHotelComponent', () => {
  let component: SerchedHotelComponent;
  let fixture: ComponentFixture<SerchedHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SerchedHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SerchedHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
