import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MatchService {
  matchURL: string = "http://localhost:8080/api/matches";

  constructor(private httpClient: HttpClient) { }
  addMatch(match) {
    return this.httpClient.post(this.matchURL, match);

  }
  getAllMatches() {
    return this.httpClient.get(this.matchURL);
  }
  getMatchById(id) {
    return this.httpClient.get(this.matchURL + "/" + id);

  }
  deleteMatch(id) {
    return this.httpClient.delete(this.matchURL + "/" + id);
  }
  editMatch(match) {
    return this.httpClient.put(this.matchURL + "/" + match.id, match);

  }
}
