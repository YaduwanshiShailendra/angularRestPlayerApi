import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "courses", //component name
  templateUrl: "./courses.component.html",
  styleUrls: ["./courses.component.css"]
})
export class coursesComponent implements OnInit {
  // to use servie or DI constructor
  constructor(private http: HttpClient) {
    this.http.get("http://api.github.com/users").subscribe(user => {
      console.log(user);
    });
  }

  ngOnInit() {
    /* window
      .fetch("http://api.github.com/users")
      .then(data => {
        data
          .json()
          .then(info => {
            console.log(info);
          })
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err)); //javascript fetch method*/
  } //closing oninit method
}
