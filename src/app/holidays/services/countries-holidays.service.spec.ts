import { TestBed } from '@angular/core/testing';

import { CountriesHolidaysService } from './countries-holidays.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

describe('CountriesHolidaysService', () => {
  let service: CountriesHolidaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [BrowserModule, HttpClientModule],
      providers: [HttpClient],
    });
    service = TestBed.inject(CountriesHolidaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
