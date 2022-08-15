import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactComponent } from './components/contact/contact.component';
import { ServicesComponent } from './components/services/services.component';
import { BlogComponent } from './components/blog/blog.component';
import { CupEventComponent } from './components/cup-event/cup-event.component';
import { ResultComponent } from './components/result/result.component';
import { NewsComponent } from './components/news/news.component';
import { StatsComponent } from './components/stats/stats.component';
import { VideosComponent } from './components/videos/videos.component';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { AddteamComponent } from './components/addteam/addteam.component';
import { AddplayerComponent } from './components/addplayer/addplayer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddarticleComponent } from './components/addarticle/addarticle.component';
import { MatchesComponent } from './components/matches/matches.component';
import { TeamsComponent } from './components/teams/teams.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdminmatchesComponent } from './components/adminmatches/adminmatches.component';
import { AdminplayersComponent } from './components/adminplayers/adminplayers.component';
import { AdminteamsComponent } from './components/adminteams/adminteams.component';
import { DisplaymatchComponent } from './components/displaymatch/displaymatch.component';
import { DisplayteamComponent } from './components/displayteam/displayteam.component';
import { DisplayplayerComponent } from './components/displayplayer/displayplayer.component';
import { HttpClientModule} from '@angular/common/http';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { EditmatchComponent } from './components/editmatch/editmatch.component'


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    NotfoundComponent,
    ContactComponent,
    ServicesComponent,
    BlogComponent,
    CupEventComponent,
    ResultComponent,
    NewsComponent,
    StatsComponent,
    VideosComponent,
    AddMatchComponent,
    AddteamComponent,
    AddplayerComponent,
    AddarticleComponent,
    MatchesComponent,
    TeamsComponent,
    AdminComponent,
    AdminmatchesComponent,
    AdminplayersComponent,
    AdminteamsComponent,
    DisplaymatchComponent,
    DisplayteamComponent,
    DisplayplayerComponent,
    AsterixPipe,
    ReversePipe,
    EditmatchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
