import { Component } from "@angular/core";
import { LocationService } from "./services/location.service";
import { WeatherService } from "./services/weather.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  title = "Weather Data Table";

  longitude: number;
  latitude: number;
  current;
  daily;
  hourly;
  timezone;
  temperature: number;
  feel: number;
  icon: String;
  description: String;

  constructor(
    private location: LocationService,
    private weather: WeatherService
  ) {}

  ngOnInit() {
    this.location.getLocation().then((res) => {
      this.longitude = res.long;
      this.latitude = res.lat;

      this.weather.getWeather(res.long, res.lat).then((response) => {
        console.log(response);
        this.temperature = response["current"]["temp"];
        this.feel = response["current"]["feels_like"];
        this.icon = response["current"]["weather"][0]["icon"];
        this.description = response["current"]["weather"][0]["description"];
        this.daily = response["daily"];
        this.hourly = response["hourly"];
        this.timezone = response["timezone"];

        response["hourly"].map((hour) => {
          let unix = new Date(hour.dt * 1000);
          hour.unix = unix;
        });

        response["daily"].map((day) => {
          let date = new Date(day.dt * 1000);
          console.log(date);
          day.date = date;
        });
      });
    });
  }
}
