import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { CustomValidators } from "../name.validators";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  constructor() {}
  //to create a reactive form,1st we need to import formgroup+formcontrol from @angular/forms
  form = new FormGroup({
    //parent formgroup
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("jspiders"),
      CustomValidators.removeWhiteSpace
    ]),
    password: new FormControl("", Validators.required)
  });
  get username() {
    return this.form.get("username"); //getter
  }
  get password() {
    return this.form.get("password");
  }
  ngOnInit() {}
}
