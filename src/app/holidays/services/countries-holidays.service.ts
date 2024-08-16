import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryV3Dto, Holiday } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CountriesHolidaysService {
  url = 'https://date.nager.at/';

  constructor(public http: HttpClient) {}

  getCountries(): Observable<CountryV3Dto[]> {
    return this.http.get<CountryV3Dto[]>(
      this.url + 'api/v3/AvailableCountries'
    );
  }

  getCountryHolidays(
    countryCode: string,
    year?: string
  ): Observable<Holiday[]> {
    const requestYear = year || new Date().getFullYear();
    return this.http.get<Holiday[]>(
      `${this.url}api/v3/PublicHolidays/${requestYear}/${countryCode}`
    );
  }

  getNextHolidays(countryCode: string): Observable<Holiday[]> {
    return this.http.get<Holiday[]>(
      `${this.url}api/v3/NextPublicHolidays/${countryCode}`
    );
  }
}
