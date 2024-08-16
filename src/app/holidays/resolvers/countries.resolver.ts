import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { CountriesHolidaysService } from '../services/countries-holidays.service';
import { inject } from '@angular/core';
import { CountryV3Dto } from '../models';
import { Observable } from 'rxjs';

export const countriesResolver: ResolveFn<Observable<CountryV3Dto[]>> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  countriesHolidaysService: CountriesHolidaysService = inject(
    CountriesHolidaysService
  )
) => {
  return countriesHolidaysService.getCountries();
};
