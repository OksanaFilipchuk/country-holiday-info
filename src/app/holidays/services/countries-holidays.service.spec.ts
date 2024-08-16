import { TestBed } from '@angular/core/testing';

import { CountriesHolidaysService } from './countries-holidays.service';

describe('CountriesHolidaysService', () => {
  let service: CountriesHolidaysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CountriesHolidaysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
