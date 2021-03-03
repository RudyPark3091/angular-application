import { Component, OnInit } from '@angular/core';
import { CalendarBodyComponent } from '../calendar-body/calendar-body.component';
import { CalendarTitleComponent } from '../calendar-title/calendar-title.component';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  currentDate: Date;

  constructor() {
    this.currentDate = new Date();
  }

  ngOnInit(): void {
    this.currentDate = new Date();
  }
}
