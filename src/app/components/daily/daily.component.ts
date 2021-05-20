import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-daily",
  templateUrl: "./daily.component.html",
  styleUrls: ["./daily.component.css"],
})
export class DailyComponent implements OnInit {
  @Input() daily;

  isVisible: boolean = true;

  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

  constructor() {}

  ngOnInit() {}
}
