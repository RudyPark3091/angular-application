import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar-title',
  templateUrl: './calendar-title.component.html',
  styleUrls: ['./calendar-title.component.css'],
})
export class CalendarTitleComponent implements OnInit {
  @Input() date: Date;

  constructor() {}

  ngOnInit(): void {}

  setDate(date: Date) {
    this.date = date;
  }
}
