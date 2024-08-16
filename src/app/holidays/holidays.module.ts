import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { CountryPageComponent } from './components/country-page/country-page.component';
import { YearsSliderComponent } from './components/years-slider/years-slider.component';

@NgModule({
  declarations: [
    CountriesListComponent,
    CountryPageComponent,
    YearsSliderComponent,
  ],
  imports: [CommonModule, HttpClientModule, SharedModule],
  exports: [CountriesListComponent],
})
export class HolidaysModule {}
