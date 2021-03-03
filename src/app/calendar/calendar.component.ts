import { Component, OnInit } from '@angular/core';
import { CalendarBodyComponent } from '../calendar-body/calendar-body.component';
import { CalendarTitleComponent } from '../calendar-title/calendar-title.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  date: Date;

  constructor() {}

  ngOnInit(): void {
    this.date = new Date();
  }

  getNextDate() {
    const month = this.date.getMonth();
    const year = this.date.getFullYear();
    const isDecember = month === 11;
    const nextMonth = isDecember ? 0 : month + 1;
    const nextYear = isDecember ? year + 1 : year;

    return new Date(nextYear, nextMonth);
  }

  getPrevDate() {
    const month = this.date.getMonth();
    const year = this.date.getFullYear();
    const isJanuary = month === 0;
    const prevMonth = isJanuary ? 11 : month - 1;
    const prevYear = isJanuary ? year - 1 : year;

    return new Date(prevYear, prevMonth);
  }

  setDate(date: Date) {
    this.date = date;
  }
}
