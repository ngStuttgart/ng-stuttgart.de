import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SideTileComponent } from './home/side-tile/side-tile.component';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './team/team.component';
import { NgBadgeComponent } from './team/ng-badge/ng-badge.component';
import { JoinComponent } from './join/join.component';
import { ArchiveComponent } from './archive/archive.component';
import { EmbeddifyPipe } from './archive/embeddify.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SideTileComponent,
    TeamComponent,
    NgBadgeComponent,
    JoinComponent,
    ArchiveComponent,
    EmbeddifyPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
