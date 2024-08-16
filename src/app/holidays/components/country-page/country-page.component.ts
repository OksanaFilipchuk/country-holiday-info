import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Holiday } from '../../models';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styleUrls: ['./country-page.component.scss'],
})
export class CountryPageComponent implements OnInit {
  countryName = '';

  holidays: Holiday[] = [];
  constructor(private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(({ holidays }) => {
      this.holidays = holidays;
    });
    this.activatedRoute.queryParams.subscribe(params => {
      this.countryName = params['countryName'];
    });
  }
}
