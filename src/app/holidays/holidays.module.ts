import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CountriesListComponent } from './components/countries-list/countries-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CountriesListComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [CountriesListComponent],
})
export class HolidaysModule {}
