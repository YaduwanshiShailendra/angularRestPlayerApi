import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "sspider";

  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyCngDP7bzsbYTjQPwU1wCNZR8hoDl5FyE4",
      authDomain: "fullstack-angular-29ab9.firebaseapp.com",
      databaseURL: "https://fullstack-angular-29ab9.firebaseio.com",
      projectId: "fullstack-angular-29ab9",
      storageBucket: "fullstack-angular-29ab9.appspot.com",
      messagingSenderId: "971766312355",
      appId: "1:971766312355:web:56f12b70841f0674b47e16"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
