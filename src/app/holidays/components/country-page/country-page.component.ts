import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Holiday } from '../../models';
import { CountriesHolidaysService } from '../../services/countries-holidays.service';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss'],
})
export class CountryPageComponent implements OnInit {
  countryName = '';
  id = '';
  year: string = new Date().getFullYear().toString();
  holidays: Holiday[] = [];
  isLoading = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private countriesHolidaysService: CountriesHolidaysService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ holidays }) => {
      this.holidays = holidays;
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.countryName = params['countryName'];
      this.id = params['id'];
    });
  }

  updateData(year: string): void {
    this.year = year;
    this.isLoading = true;
    this.countriesHolidaysService
      .getCountryHolidays(this.id, year)
      .subscribe(data => {
        this.holidays = data;
        this.isLoading = true;
      });
  }
}
