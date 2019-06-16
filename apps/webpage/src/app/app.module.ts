import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SideTileComponent } from './home/side-tile/side-tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SideTileComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
