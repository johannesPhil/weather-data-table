import { WeatherService } from "./../../services/weather.service";
import { Component, OnInit, Input } from "@angular/core";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit {
  @Input() longitude;
  @Input() latitude;
  @Input() location;
  @Input() current;
  @Input() temperature: number;
  @Input() feel: number;
  @Input() icon: String;
  @Input() description: String;

  time: number = Date.now();

  constructor(private weather: WeatherService) {}

  ngOnInit() {}
}
