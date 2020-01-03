import { Component } from "@angular/core";

@Component({
  selector: "cources", //component name  (this is component name)
  // render template
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class coursesComponent {
  // angular loop done by for of loop
  // languges = ["java", "python", "nodejs", "angular"];
  users = [
    {
      name: "Sony",
      photo:
        "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377__340.jpg",
      age: 24,
      company_name: "Test yantra",
      salary: 30000,
      designation: "nodeJs developer",
      location: "Bangalore",
      gender: "female"
    },
    {
      name: "Sherly",
      photo:
        "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377__340.jpg",
      age: 21,
      company_name: "Fadu Company",
      salary: 30000,
      designation: "babu developer",
      location: "mangalore",
      gender: "female"
    },
    {
      name: "kamini",
      photo:
        "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377__340.jpg",
      age: 24,
      company_name: "kutiya",
      salary: 30000,
      designation: "nodeJs developer",
      location: "Bangalore",
      gender: "female"
    },
    {
      name: "Sony",
      photo:
        "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377__340.jpg",
      age: 24,
      company_name: "Test yantra",
      salary: 30000,
      designation: "nodeJs developer",
      location: "Bangalore",
      gender: "female"
    }
  ];

  addNewuser() {
    this.users.unshift({
      name: "babu",
      photo:
        "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377__340.jpg",
      age: 24,
      company_name: "Test yantra",
      salary: 30000,
      designation: "nodeJs developer",
      location: "Bangalore",
      gender: "female"
    });
  }

  removeUser(user) {
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }
}
