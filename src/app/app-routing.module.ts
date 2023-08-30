import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { MatchesComponent } from './component/matches/matches.component';
import { PlayerStatsComponent } from './component/player-stats/player-stats.component';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { AddTeamComponent } from './component/add-team/add-team.component';
import { AdminComponent } from './component/admin/admin.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { MatchInfoComponent } from './component/match-info/match-info.component';
import { TeamInfoComponent } from './component/team-info/team-info.component';
import { PlayerInfoComponent } from './component/player-info/player-info.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { EditTeamComponent } from './component/edit-player/edit-team/edit-team.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { TeamsComponent } from './component/teams/teams.component';
import { SearchContentComponent } from './component/search-content/search-content.component';
import { AddStadiumComponent } from './component/add-stadium/add-stadium.component';
import { SingleStadiumComponent } from './component/single-stadium/single-stadium.component';
import { SearchTeamStadiumComponent } from './component/search-team-stadium/search-team-stadium.component';
import { SeachPlayerComponent } from './component/seach-player/seach-player.component';
import { WeatherComponent } from './component/weather/weather.component';




const routes: Routes = [
  {path: "" , component:HomeComponent},
  //http://localhost:4200/signin => logincomponent will be displayed
  {path: "signin" , component:LoginComponent},
   //http://localhost:4200/subscription => SignupComponent will be displayed
  {path: "subscription" , component:SignupComponent},
  {path: "signup-admin" , component:SignupComponent},
  {path:"matches" , component:MatchesComponent},
  {path:"player-stats" , component:PlayerStatsComponent},
  {path:"add-match" , component:AddMatchComponent},
  {path:"add-players" , component:AddPlayerComponent},
  {path:"add-team" , component:AddTeamComponent},
  {path:"dropdown" , component:AdminComponent},
  {path:"dashboard" , component:DashboardComponent},
  {path:"match-info/:id" , component:MatchInfoComponent},
  {path:"team-info" , component:TeamInfoComponent},
  {path:"player-info" , component:PlayerInfoComponent},
  {path:"edit-match" , component:EditMatchComponent},
  {path:"edit-team/:id" , component:EditTeamComponent},
  {path:"edit-player" , component:EditPlayerComponent},
  {path:"myTeams" , component:TeamsComponent},
  {path:"search" , component:SearchContentComponent},
  {path:"add-stadium" , component:AddStadiumComponent},
  {path:"stadium-info/:id" , component:SingleStadiumComponent},
  {path:"search-stadium" , component:SearchTeamStadiumComponent },
  {path:"search-player" , component:SeachPlayerComponent},
  {path:"weather" , component:WeatherComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
