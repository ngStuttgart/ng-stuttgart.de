import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NxModule } from '@nrwl/nx';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CoreModule } from './core/core.module';
import { SideTileComponent } from './home/side-tile/side-tile.component';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './team/team.component';
import { NgBadgeComponent } from './team/ng-badge/ng-badge.component';
import { JoinComponent } from './join/join.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SideTileComponent,
    TeamComponent,
    NgBadgeComponent,
    JoinComponent
  ],
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    AppRoutingModule,
    CoreModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
