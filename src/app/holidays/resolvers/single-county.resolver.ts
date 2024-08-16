import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { CountriesHolidaysService } from '../services/countries-holidays.service';
import { inject } from '@angular/core';
import { Holiday } from '../models';
import { Observable } from 'rxjs';

export const singleCountyResolver: ResolveFn<Observable<Holiday[]>> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  countriesHolidaysService: CountriesHolidaysService = inject(
    CountriesHolidaysService
  )
) => {
  return countriesHolidaysService.getCountryHolidays(route.paramMap.get('id')!);
};
