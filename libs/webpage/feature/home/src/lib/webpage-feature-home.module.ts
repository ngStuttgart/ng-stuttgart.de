import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { SideTileComponent } from './side-tile/side-tile.component';

@NgModule({
  declarations: [HomeComponent, SideTileComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: HomeComponent }])
  ]
})
export class WebpageFeatureHomeModule {}
