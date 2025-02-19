import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountryPageComponent } from './country-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { HolidaysModule } from '../../holidays.module';

describe('CountryPageComponent', () => {
  let component: CountryPageComponent;
  let fixture: ComponentFixture<CountryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountryPageComponent],
      providers: [HttpClient],
      imports: [
        BrowserModule,
        HttpClientModule,
        RouterTestingModule,
        HolidaysModule,
      ],
    });
    fixture = TestBed.createComponent(CountryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
