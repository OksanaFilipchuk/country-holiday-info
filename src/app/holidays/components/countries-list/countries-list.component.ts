import { Component, OnInit } from '@angular/core';
import { CountryV3Dto } from '../../models';
import { ActivatedRoute } from '@angular/router';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  countries: CountryV3Dto[] = [];
  countriesFiltered: CountryV3Dto[] = [];
  searchQuery = '';
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ countries }) => {
      this.countries = countries;
      this.countriesFiltered = countries;
    });
  }

  changeQuery(event: string) {
    this.countriesFiltered = event
      ? this.countries.filter(el => el.name.includes(event))
      : this.countries;
  }
}
