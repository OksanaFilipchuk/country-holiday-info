import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HolidayCardComponent } from './holiday-card.component';
import { SharedModule } from 'src/app/shared/shared.module';

describe('HolidayCardComponent', () => {
  let component: HolidayCardComponent;
  let fixture: ComponentFixture<HolidayCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HolidayCardComponent],
      imports: [SharedModule],
    });
    fixture = TestBed.createComponent(HolidayCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
