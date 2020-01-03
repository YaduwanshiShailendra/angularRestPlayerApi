import { CustomValidators } from "./../name.validators";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

@Component({
  selector: "app-reactiveform",
  templateUrl: "./reactiveform.component.html",
  styleUrls: ["./reactiveform.component.css"]
})
export class ReactiveformComponent implements OnInit {
  constructor() {}
  // to create a reactiveform first we need to import FormGroup  class
  //  and FormControl class from @angular/forms
  form = new FormGroup({
    // forms this ia a parent, that is formGroup
    username: new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern("jspiders"),
      CustomValidators.removespace
    ]), // inputs
    password: new FormControl("", Validators.required) // inputs that is formControl
  });
  /// get username and password
  get username() {
    return this.form.get("username");
  } // getter

  get password() {
    return this.form.get("password");
  } // getter

  ngOnInit() {}
}
