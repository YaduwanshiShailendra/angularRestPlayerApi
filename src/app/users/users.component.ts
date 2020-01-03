// import { Component, OnInit } from "@angular/core";

// @Component({
//   selector: "app-users",
//   templateUrl: "./users.component.html",
//   styleUrls: ["./users.component.css"]
// })
// export class UsersComponent implements OnInit {
//   users = [
//     {
//       user_id: 1,
//       user_pic:
//         " https://cdn.pixabay.com/photo/2019/12/17/16/06/cat-4701934__340.jpg",
//       user_name: "manu",
//       user_dob: new Date("01/01/1990"),
//       user_designation: "web developer",
//       user_salary: 40000,
//       user_location: "bangalore",
//       user_education: "B.tech",
//       user_doj: new Date("10/10/2015"),
//       user_company: "test-yentra"
//     },
//     {
//       user_id: 2,
//       user_pic:
//         "https://cdn.pixabay.com/photo/2019/12/10/00/23/girl-4684702__340.jpg",
//       user_name: "vinu",
//       user_dob: new Date("02/02/1991"),
//       user_designation: "web developer",
//       user_salary: 30000,
//       user_location: "bangalore",
//       user_education: "B.tech",
//       user_doj: new Date("10/10/2015"),
//       user_company: "jspiders"
//     },
//     {
//       user_id: 3,
//       user_pic:
//         "https://cdn.pixabay.com/photo/2019/12/10/00/23/girl-4684702__340.jpg",
//       user_name: "abc",
//       user_dob: new Date("02/02/1995"),
//       user_designation: "web developer",
//       user_salary: 60000,
//       user_location: "bangalore",
//       user_education: "B.tech",
//       user_doj: new Date("10/10/2015"),
//       user_company: "Qspiders"
//     },
//     {
//       user_id: 4,
//       user_pic:
//         "https://cdn.pixabay.com/photo/2019/12/10/00/23/girl-4684702__340.jpg",
//       user_name: "xyz",
//       user_dob: new Date("03/03/1993"),
//       user_designation: "no developer",
//       user_salary: 50000,
//       user_location: "bangalore",
//       user_education: "B.tech",
//       user_doj: new Date("10/10/2015"),
//       user_company: "jspiders"
//     }
//   ];
//   constructor() {}

//   ngOnInit() {}
// }

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
        "https://cdn.pixabay.com/photo/2019/03/15/09/48/girl-4056681__340.jpg",
      age: 20,
      gender: "Female",
      designation: "nodeJs developer",
      education: "BE",
      company: "Test yantra",
      salary: 30000,
      location: "Bangalore"
    },
    {
      name: "mahesh",
      photo:
        "https://cdn.pixabay.com/photo/2016/04/21/01/31/handsome-1342457__340.jpg",
      age: 21,
      gender: "male",
      designation: "Angular developer",
      education: "BE",
      company: "Test yantra",
      salary: 35000,
      location: "Mysore"
    },
    {
      name: "usha",
      photo:
        "https://cdn.pixabay.com/photo/2016/02/19/11/36/motherhood-1209814__340.jpg",
      age: 30,
      gender: "Female",
      designation: "java developer",
      education: "BE",
      company: "Test yantra",
      salary: 40000,
      location: "Shimoga"
    },
    {
      name: "anish",
      photo:
        "https://image.shutterstock.com/image-photo/side-view-male-blogger-browsing-260nw-1027895221.jpg",
      age: 40,
      gender: "male",
      designation: "nodeJs developer",
      education: "BE",
      company: "Test yantra",
      salary: 25000,
      location: "Mangalore"
    }
  ];
  addNewuser() {
    this.users.push({
      name: "anish",
      photo:
        "https://image.shutterstock.com/image-photo/side-view-male-blogger-browsing-260nw-1027895221.jpg",
      age: 40,
      gender: "male",
      designation: "nodeJs developer",
      education: "BE",
      company: "Test yantra",
      salary: 25000,
      location: "Mangalore"
    });
  }
  Remove(user) {
    let index = this.users.indexOf(user);
    this.users.splice(index, 1);
  }

  constructor() {}

  ngOnInit() {}
}
