import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  title = "jspiders";
  ngOnInit() {
    var firebaseConfig = {
      apiKey: "AIzaSyACb6HoQurH2aiEJ-K-wxAGtWTeEYemerI",
      authDomain: "fullstack-angular-8ae8b.firebaseapp.com",
      databaseURL: "https://fullstack-angular-8ae8b.firebaseio.com",
      projectId: "fullstack-angular-8ae8b",
      storageBucket: "fullstack-angular-8ae8b.appspot.com",
      messagingSenderId: "305301103097",
      appId: "1:305301103097:web:0629d9931e3846b41b5d28"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  }
}
