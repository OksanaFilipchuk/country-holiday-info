import { Component, Input } from '@angular/core';
import { Holiday } from '../../models';

@Component({
  selector: 'app-holiday-card',
  templateUrl: './holiday-card.component.html',
  styleUrls: ['./holiday-card.component.scss'],
})
export class HolidayCardComponent {
  @Input() holiday: Holiday;
}
