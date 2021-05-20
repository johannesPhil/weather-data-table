import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-hourly",
  templateUrl: "./hourly.component.html",
  styleUrls: ["./hourly.component.css"],
})
export class HourlyComponent implements OnInit {
  @Input() hourly;

  isVisible: boolean = true;

  constructor() {}

  public toggleVisibility() {
    this.isVisible = !this.isVisible;
  }
  ngOnInit() {}
}
