import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryV3Dto } from '../models';

@Injectable({
  providedIn: 'root',
})
export class CountriesHolidaysService {
  url = 'https://date.nager.at/api/v3/AvailableCountries';

  constructor(public http: HttpClient) {}

  getCountries(): Observable<CountryV3Dto[]> {
    return this.http.get<CountryV3Dto[]>(this.url);
  }
}
