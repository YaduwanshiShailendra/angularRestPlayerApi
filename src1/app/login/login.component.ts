import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  login: String = "hello login page how r u babu? 😘 💯💯";
  constructor() {}

  ngOnInit() {}
}
