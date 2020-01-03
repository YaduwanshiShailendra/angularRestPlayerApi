import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, FormArray } from "@angular/forms";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"]
})
export class StudentsComponent implements OnInit {
  constructor() {}
  form = new FormGroup({
    StudentList: new FormArray([])
  });
  //use getter
  get GetStudents() {
    return this.form.get("StudentList");
  }
  addStudents(student) {
    (this.GetStudents as FormArray).push(new FormControl(student.value));
  }
  Remove(student: FormControl) {
    let index = (this.GetStudents as FormArray).controls.indexOf(student);
    (this.GetStudents as FormArray).removeAt(index);
  }
  ngOnInit() {}
}
