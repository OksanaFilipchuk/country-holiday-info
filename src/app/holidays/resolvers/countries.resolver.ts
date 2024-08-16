import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { CountriesHolidaysService } from '../services/countries-holidays.service';
import { inject } from '@angular/core';

export const countriesResolver: ResolveFn<any> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  countriesHolidaysService: CountriesHolidaysService = inject(
    CountriesHolidaysService
  )
) => {
  return countriesHolidaysService.getCountries();
};
