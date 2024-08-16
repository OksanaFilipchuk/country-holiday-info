import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, switchMap } from 'rxjs';
import { CountriesHolidaysService } from '../../services/countries-holidays.service';

@Component({
  selector: 'app-years-slider',
  templateUrl: './years-slider.component.html',
  styleUrls: ['./years-slider.component.scss'],
})
export class YearsSliderComponent implements OnInit {
  max = new Date().getFullYear();
  min = 1980;
  step = 1;
  value = new FormControl(new Date().getFullYear());

  @Output() newValue = new EventEmitter<string>();

  ngOnInit(): void {
    this.value.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      if (value) {
        this.newValue.emit(value.toString());
      }
    });
  }
}
