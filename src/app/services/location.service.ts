import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class LocationService {
  constructor() {}

  public getLocation(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (res) => {
          resolve({ long: res.coords.longitude, lat: res.coords.latitude });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
