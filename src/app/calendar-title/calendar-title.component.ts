import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-title',
  templateUrl: './calendar-title.component.html',
  styleUrls: ['./calendar-title.component.css'],
})
export class CalendarTitleComponent implements OnInit {
  @Input() date: Date;
  @Output() changePrevMonth = new EventEmitter();
  @Output() changeNextMonth = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  setDate(date: Date) {
    this.date = date;
  }
}
