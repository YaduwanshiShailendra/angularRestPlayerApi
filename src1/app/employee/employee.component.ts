import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  // ImageUrl =
  //   "https://cdn.pixabay.com/photo/2019/12/15/13/01/couple-4697055_960_720.jpg";
  // isActive = false;
  // colSpan = 20;
  // username(e) {
  //   console.log("username is ", e.target.value);
  // }

  // getUsername(username) {
  //   console.log(username.value);
  // }

  // employee = [
  //   {
  //     emp_id: 1,
  //     emp_photo:
  //       "https://cdn.pixabay.com/photo/2017/03/19/03/40/avatar-2155431_960_720.png",
  //     emp_name: "Sony",
  //     emp_designation: "Nodejs developer",
  //     emp_salary: 400000,
  //     emp_location: "Paris",
  //     emp_education: "BE",
  //     emp_doj: new Date("10/10/2015")
  //   },

  //   {
  //     emp_id: 2,
  //     emp_photo:
  //       "https://cdn.pixabay.com/photo/2017/03/19/03/40/avatar-2155431_960_720.png",
  //     emp_name: "Sony",
  //     emp_designation: "Nodejs developer",
  //     emp_salary: 400000,
  //     emp_location: "Paris",
  //     emp_education: "BE",
  //     emp_doj: new Date("10/10/2015")
  //   }
  // ];

  // click() {
  //   alert("hello Angular here");
  // }
  constructor() {}

  ngOnInit() {
    //javascript way
    // var input = document.querySelector("input");
    // input.addEventListener("keyup", e => {
    //   console.log(e.target.value);
    // });
  }
}
