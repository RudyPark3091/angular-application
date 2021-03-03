import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-body',
  templateUrl: './calendar-body.component.html',
  styleUrls: ['./calendar-body.component.css'],
})
export class CalendarBodyComponent implements OnInit {
  @Input() date: Date;
  days: number[] = [];

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < 42; i++) {
      this.days.push(i);
    }
  }

  setDate(date: Date) {
    this.date = date;
  }
}
