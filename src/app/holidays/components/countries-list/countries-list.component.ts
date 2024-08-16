import { Component, OnInit } from '@angular/core';
import { CountryV3Dto, Holiday } from '../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  countries: CountryV3Dto[] = [];
  countriesFiltered: CountryV3Dto[] = [];
  randomCountries: any;
  randomCountriesNextHolidays: any;
  searchQuery = '';

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ data }) => {
      console.log(data);
      this.countries = data.countries;
      this.countriesFiltered = data.countries;
      this.initWidget(data.nextHolidays);
    });
  }
  initWidget(nextHolidays: any) {
    this.randomCountries = Object.keys(nextHolidays);
    this.randomCountriesNextHolidays = nextHolidays;
  }

  changeQuery(event: string): void {
    this.countriesFiltered = event
      ? this.countries.filter(el => el.name.includes(event))
      : this.countries;
  }
}
