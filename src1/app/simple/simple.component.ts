import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-simple",
  templateUrl: "./simple.component.html",
  styleUrls: ["./simple.component.css"]
})
export class SimpleComponent implements OnInit {
  users = ["Shaili 💏", "Sony ❤️"];
  toggleClass = false;
  toggleState() {
    this.toggleClass = !this.toggleClass;
    console.log("click event is working here");
  }

  addDynamicClass() {
    return {
      "bg-danger": true,
      "text-white": true,
      "mt-2": true,
      "p-4": true,
      background: this.toggleClass
    };
  }

  users1 = [
    {
      name: "Sony",
      age: 29,
      gender: "female",
      country: "india"
    },
    {
      name: "Shaili",
      age: 21,
      gender: "male",
      country: "Bharat"
    },
    {
      name: "Nikki",
      age: 35,
      gender: "female",
      country: "India"
    }
  ];
  constructor() {}

  ngOnInit() {}
}
