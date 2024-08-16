import {
  ActivatedRouteSnapshot,
  ResolveFn,
  RouterStateSnapshot,
} from '@angular/router';
import { CountriesHolidaysService } from '../services/countries-holidays.service';
import { inject } from '@angular/core';
import { forkJoin, map, mergeMap, Observable } from 'rxjs';

export const countriesResolver: ResolveFn<Observable<any>> = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
  countriesHolidaysService: CountriesHolidaysService = inject(
    CountriesHolidaysService
  )
) => {
  return countriesHolidaysService.getCountries().pipe(
    mergeMap(data => {
      const randomCountries = [1, 2, 3].map(() => {
        const index = Math.floor(Math.random() * data.length);
        return [
          data[index].name,
          countriesHolidaysService.getNextHolidays(data[index].countryCode),
        ];
      });
      return forkJoin(Object.fromEntries(randomCountries)).pipe(
        map(holidaysData => {
          return {
            countries: data,
            nextHolidays: holidaysData,
          };
        })
      );
    })
  );
};
