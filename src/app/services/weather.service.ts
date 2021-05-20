import { logging } from "protractor";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  API_KEY = "8e0e94ef5ccfc59b5187bb88b47ec8b5";
  private longitude: number;
  private latitude: number;

  public getWeather(longitude: number, latitude: number) {
    this.longitude = longitude;
    this.latitude = latitude;
    return new Promise((resolve, reject) => {
      this.http
        .get(
          `https://api.openweathermap.org/data/2.5/onecall?lat=${this.latitude}&lon=${this.longitude}&units=metric&appid=${this.API_KEY}`
        )
        .subscribe((res) => {
          resolve(res);
        });
    });
  }
}
