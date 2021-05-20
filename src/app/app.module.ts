import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HourlyComponent } from './components/hourly/hourly.component';
import { DailyComponent } from './components/daily/daily.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HourlyComponent, DailyComponent],
  imports: [BrowserModule, HttpClientModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
