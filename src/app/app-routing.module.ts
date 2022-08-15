import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddarticleComponent } from './components/addarticle/addarticle.component';
import { AddplayerComponent } from './components/addplayer/addplayer.component';
import { AddteamComponent } from './components/addteam/addteam.component';
import { AdminComponent } from './components/admin/admin.component';
import { ContactComponent } from './components/contact/contact.component';
import { DisplaymatchComponent } from './components/displaymatch/displaymatch.component';
import { DisplayplayerComponent } from './components/displayplayer/displayplayer.component';
import { DisplayteamComponent } from './components/displayteam/displayteam.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { MatchesComponent } from './components/matches/matches.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ServicesComponent } from './components/services/services.component';
import { SignupComponent } from './components/signup/signup.component';
import { TeamsComponent } from './components/teams/teams.component';


const routes: Routes = [
  {path : '' , component:HomeComponent},
  {path :'login',component:LoginComponent},
  {path :'signup',component:SignupComponent},
  {path :'contact-us',component:ContactComponent},
  {path :'our-services',component:ServicesComponent},
  {path :'addmatch',component:AddMatchComponent},
  {path :'addteam',component:AddteamComponent},
  {path :'addplayer',component:AddplayerComponent},
  {path :'addarticle',component:AddarticleComponent},
  {path : 'matches',component:MatchesComponent},
  {path : 'teams',component:TeamsComponent},
  {path :'dashboard',component:AdminComponent},
  {path :'displaymatch/:id',component:DisplaymatchComponent},
  {path :'teaminfo/:id',component:DisplayteamComponent},
  {path :'displayplayer/:id',component:DisplayplayerComponent},
  {path : '**',component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
