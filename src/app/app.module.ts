import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { CalendarTitleComponent } from './calendar-title/calendar-title.component';
import { CalendarBodyComponent } from './calendar-body/calendar-body.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    CalendarTitleComponent,
    CalendarBodyComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
