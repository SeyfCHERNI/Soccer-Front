import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  PlayerURL: string = "http://localhost:8080/players";

  constructor(private httpClient: HttpClient) { }
  addPlayer(player) {
    return this.httpClient.post(this.PlayerURL, player);

  }
  getAllPlayers() {
    return this.httpClient.get(this.PlayerURL);
  }
  getPlayerById(id) {
    return this.httpClient.get(this.PlayerURL + "/" + id);

  }
  deletePlayer(id) {
    return this.httpClient.delete(this.PlayerURL + "/" + id);
  }
  editPlayer(player) {
    return this.httpClient.put(this.PlayerURL + "/" + player.id, player);

  }
}
