import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { HourlyComponent } from "./components/hourly/hourly.component";
import { DailyComponent } from "./components/daily/daily.component";

const appRoutes: Routes = [
  {
    path: "",
    component: AppComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HourlyComponent,
    DailyComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FontAwesomeModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
