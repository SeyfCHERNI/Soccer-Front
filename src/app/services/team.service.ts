import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  TeamURL: string = "http://localhost:8080/teams";

  constructor(private httpClient: HttpClient) { }
  addTeam(team) {
    return this.httpClient.post(this.TeamURL, team);

  }
  getAllTeams() {
    return this.httpClient.get(this.TeamURL);
  }
  getTeamById(id) {
    return this.httpClient.get(this.TeamURL + "/" + id);

  }
  deleteTeam(id) {
    return this.httpClient.delete(this.TeamURL + "/" + id);
  }
  editTeam(team) {
    return this.httpClient.put(this.TeamURL + "/" + team.id, team);

  }

}
