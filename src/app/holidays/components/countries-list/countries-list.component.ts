import { Component, OnInit } from '@angular/core';
import { CountryV3Dto } from '../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-countries-list',
  templateUrl: './countries-list.component.html',
  styleUrls: ['./countries-list.component.scss'],
})
export class CountriesListComponent implements OnInit {
  countries: CountryV3Dto[] = [];

  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ countries }) => {
      this.countries = countries;
      console.log(countries);
    });
  }
}
