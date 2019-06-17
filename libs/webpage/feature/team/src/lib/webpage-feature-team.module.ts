import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgBadgeComponent } from './ng-badge/ng-badge.component';
import { TeamComponent } from './team.component';

@NgModule({
  declarations: [TeamComponent, NgBadgeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TeamComponent }])
  ]
})
export class WebpageFeatureTeamModule {}
