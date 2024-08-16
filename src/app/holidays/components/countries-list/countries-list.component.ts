import { Component, OnInit } from '@angular/core';
import { CountryV3Dto, Holiday } from '../../models';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ data }) => {
      console.log(data);
      this.countries = data.countries;
      this.countriesFiltered = data.countries;
      this.initWidgetData(data.nextHolidays);
    });
  }

  initWidgetData(nextHolidays: any): void {
    this.randomCountries = Object.keys(nextHolidays);
    this.randomCountriesNextHolidays = nextHolidays;
  }

  changeQuery(event: string): void {
    this.countriesFiltered = event
      ? this.countries.filter(el =>
          el.name.toLowerCase().includes(event.toLowerCase())
        )
      : this.countries;
  }

  navigate(country: string): void {
    const countryCode = this.countries.find(
      el => el.name === country
    )?.countryCode;
    this.router.navigate(['/countries', countryCode], {
      queryParams: { countryName: country, id: countryCode },
    });
  }
}
