import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: ["./employee.component.css"]
})
export class EmployeeComponent implements OnInit {
  /* ImageUrl =
    "https://cdn.pixabay.com/photo/2019/12/13/20/56/mountain-4693871_960_720.jpg";
  isActive = false;
  colSpan = 2;
  click(event) {
    console.log(event);
  }
  username(e) {
    console.log("username is ", e.target.value);
  }
  enterEmail(email) {
    console.log(email);
  }
  getUsername(username) {
    console.log(username);
  }
  /*employee = [
    {
      emp_id: 1,
      emp_pic:
        "https://cdn.pixabay.com/photo/2019/12/15/21/55/christmas-4698101__340.jpg",
      emp_name: "manu",
      emp_designation: "web developer",
      emp_salary: 40000,
      emp_location: "bangalore",
      emp_education: "B.tech",
      emp_doj: new Date("10/10/2015")
    },
    {
      emp_id: 2,
      emp_pic:
        "https://cdn.pixabay.com/photo/2019/12/10/00/23/girl-4684702__340.jpg",
      emp_name: "vinu",
      emp_designation: "web developer",
      emp_salary: 40000,
      emp_location: "bangalore",
      emp_education: "B.tech",
      emp_doj: new Date("10/10/2015")
    }
  ];*/
  constructor() {}

  ngOnInit() {
    // javascript way
    //var input = document.querySelector('input');
    //input.addEventListener('keyup', e => {
    //  console.log(e.target.value);
    // });
  }
}
