import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YearsSliderComponent } from './years-slider.component';

describe('YearsSliderComponent', () => {
  let component: YearsSliderComponent;
  let fixture: ComponentFixture<YearsSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YearsSliderComponent]
    });
    fixture = TestBed.createComponent(YearsSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
