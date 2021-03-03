import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-calendar-body',
  templateUrl: './calendar-body.component.html',
  styleUrls: ['./calendar-body.component.css'],
})
export class CalendarBodyComponent implements OnChanges {
  @Input() date: Date;
  firstDate: Date;
  days: number[] = [];

  constructor() {}

  ngOnChanges(): void {
    this.render();
  }

  render() {
    this.days = [];
    this.firstDate = new Date(this.date.getFullYear(), this.date.getMonth());
    const day = this.firstDate.getDay();
    const date = this.firstDate.getDate();
    const lastDate = this.getLastDate(
      this.date.getFullYear(),
      this.date.getMonth()
    );

    for (let i = 0; i < 42; i++) {
      if (i >= day && i < day + lastDate) {
        this.days.push(i - day + 1);
      } else {
        this.days.push(-1);
      }
    }
  }

  getLastDate(year: number, month: number) {
    switch (month) {
      case 1:
        return year % 4 === 0 ? 29 : 28;
      case 3:
      case 5:
      case 8:
      case 10:
        return 30;
      default:
        return 31;
    }
  }

  setDate(date: Date) {
    this.date = date;
  }
}
