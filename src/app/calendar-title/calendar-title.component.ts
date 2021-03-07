import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-title',
  templateUrl: './calendar-title.component.html',
  styleUrls: ['./calendar-title.component.css'],
})
export class CalendarTitleComponent implements OnChanges {
  @Input() date: Date;
  month: string;
  year: string;

  @Output() changePrevMonth = new EventEmitter();
  @Output() changeNextMonth = new EventEmitter();

  constructor() {}

  ngOnChanges(): void {
    const isSingleDigit = this.date.getMonth() < 9;
    this.month = `${isSingleDigit ? 0 : ""}${this.date.getMonth() + 1}`
    this.year = this.date.getFullYear().toString();
  }

  setDate(date: Date) {
    this.date = date;
  }
}
