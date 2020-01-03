import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  users = [
    {
      name: "anu",
      photo:
        "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377__340.jpg",
      id: 1,
      designation: "nodeJs developer",
      doj: new Date(10 / 5 / 2017),
      education: "BE",
      date_of_birth: new Date(20 / 6 / 1995),
      company_name: "Test yantra",
      salary: 30000,
      location: "Bangalore"
    },
    {
      name: "mahesh",
      photo:
        "https://cdn.pixabay.com/photo/2016/04/21/01/31/handsome-1342457__340.jpg",
      id: 2,
      designation: "Angular developer",
      doj: new Date(9 / 5 / 2018),
      education: "BE",
      date_of_birth: new Date(20 / 6 / 1998),
      company_name: "Test yantra",
      salary: 35000,
      location: "Mysore"
    },
    {
      name: "usha",
      photo:
        "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083376__340.jpg",
      id: 3,
      designation: "java developer",
      doj: new Date(10 / 5 / 2016),
      education: "BE",
      date_of_birth: new Date(20 / 6 / 1980),
      company_name: "Test yantra",
      salary: 40000,
      location: "Shimoga"
    },
    {
      name: "anish",
      photo:
        "https://image.shutterstock.com/image-photo/side-view-male-blogger-browsing-260nw-1027895221.jpg",
      id: 4,
      designation: "nodeJs developer",
      doj: new Date(11 / 5 / 2013),
      education: "BE",
      date_of_birth: new Date(20 / 6 / 1983),
      company_name: "Test yantra",
      salary: 25000,
      location: "Mangalore"
    }
  ];

  constructor() {}

  ngOnInit() {}
}
