import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: "app-player",
  templateUrl: "./player.component.html",
  styleUrls: ["./player.component.css"]
})
export class PlayerComponent implements OnInit {
  private playerUrl =
    "https://cricapi.com/api/playerFinder?apikey=utlFo1ACpuTHeQlqg2hBn6rCeJV2&name=";
  // to use servie or DI constructor
  constructor(private http: HttpClient) {}

  playerInfo = [];

  searchPlayer(player) {
    this.http.get<any>(`${this.playerUrl}${player}`).subscribe(user => {
      this.playerInfo = user.data;
    });
  }

  ngOnInit() {}
}
