import { FormGroup, FormArray, FormControl } from "@angular/forms";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  constructor() {}

  form = new FormGroup({
    StudentsList: new FormArray([])
  });

  //use getter
  get GetStudents() {
    return this.form.get("StudentsList");
  }

  addStudents(student) {
    console.log(student.value);
    (this.GetStudents as FormArray).push(new FormControl(student.value));
  }

  removeUser(student) {
    let index = (this.GetStudents as FormArray).controls.indexOf(student);
    (this.GetStudents as FormArray).removeAt(index);
  }
  ngOnInit() {}
}
