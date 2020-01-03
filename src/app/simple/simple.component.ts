import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent implements OnInit {
  /* toggleClass = false;
  toggleState() {
    this.toggleClass = !this.toggleClass;
  }
  dynamicCss() {
    return {
      "bg-danger": true,
      color: "text-light",
      background: this.toggleClass
    };
  }*/
  users = [
    {
      name: "manu",
      age: 20,
      gender: "male"
    },
    {
      name: "manu",
      age: 20,
      gender: "female"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
