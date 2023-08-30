import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { CupEventComponent } from './component/cup-event/cup-event.component';
import { ScoreComponent } from './component/score/score.component';
import { NewsComponent } from './component/news/news.component';
import { StatsComponent } from './component/stats/stats.component';
import { BlogComponent } from './component/blog/blog.component';
import { NewsInfoComponent } from './component/news-info/news-info.component';
import { ArticleComponent } from './component/article/article.component';
import { MatchesComponent } from './component/matches/matches.component';
import { PlayerStatsComponent } from './component/player-stats/player-stats.component';
import { SinglePlayerComponent } from './component/single-player/single-player.component';
import { AdminComponent } from './component/admin/admin.component';
import { AddMatchComponent } from './component/add-match/add-match.component';
import { AddTeamComponent } from './component/add-team/add-team.component';
import { AddPlayerComponent } from './component/add-player/add-player.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { TableMatcheComponent } from './component/table-matche/table-matche.component';
import { TablePlayerComponent } from './component/table-player/table-player.component';
import { TableTeamComponent } from './component/table-team/table-team.component';
import { MatchInfoComponent } from './component/match-info/match-info.component';
import { EditMatchComponent } from './component/edit-match/edit-match.component';
import { TeamInfoComponent } from './component/team-info/team-info.component';
import { EditTeamComponent } from './component/edit-player/edit-team/edit-team.component';
import { PlayerInfoComponent } from './component/player-info/player-info.component';
import { EditPlayerComponent } from './component/edit-player/edit-player.component';
import { TeamsComponent } from './component/teams/teams.component';
import { TeamOneComponent } from './component/team-one/team-one.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BannerComponent } from './component/banner/banner.component';
import { AsterixPipe } from './pipes/asterix.pipe';
import { ReversePipe } from './pipes/reverse.pipe';
import { SearchContentComponent } from './component/search-content/search-content.component';
import { AddStadiumComponent } from './component/add-stadium/add-stadium.component';
import { TableStadiumComponent } from './component/table-stadium/table-stadium.component';
import { SingleStadiumComponent } from './component/single-stadium/single-stadium.component';
import { HttpClientModule   }from "@angular/common/http";
import { SearchTeamStadiumComponent } from './component/search-team-stadium/search-team-stadium.component';
import { SeachPlayerComponent } from './component/seach-player/seach-player.component';
import { WeatherComponent } from './component/weather/weather.component';
import { MyFilterSearchPipe } from './pipes/my-filter-search.pipe';
import { JwPaginationModule } from 'jw-angular-pagination';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    CupEventComponent,
    ScoreComponent,
    NewsComponent,
    StatsComponent,
    BlogComponent,
    NewsInfoComponent,
    ArticleComponent,
    MatchesComponent,
    PlayerStatsComponent,
    SinglePlayerComponent,
    AdminComponent,
    AddMatchComponent,
    AddTeamComponent,
    AddPlayerComponent,
    DashboardComponent,
    TableMatcheComponent,
    TablePlayerComponent,
    TableTeamComponent,
    MatchInfoComponent,
    EditMatchComponent,
    TeamInfoComponent,
    EditTeamComponent,
    PlayerInfoComponent,
    EditPlayerComponent,
    TeamsComponent,
    TeamOneComponent,
    BannerComponent,
    AsterixPipe,
    ReversePipe,
    SearchContentComponent,
    AddStadiumComponent,
    TableStadiumComponent,
    SingleStadiumComponent,
    SearchTeamStadiumComponent,
    SeachPlayerComponent,
    WeatherComponent,
    MyFilterSearchPipe
  ],
  imports: [BrowserModule , AppRoutingModule , FormsModule , ReactiveFormsModule , HttpClientModule , JwPaginationModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
