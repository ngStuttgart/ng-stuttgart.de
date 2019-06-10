import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamComponent } from './team.component';
import { NgBadgeComponent } from './ng-badge/ng-badge.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [TeamComponent, NgBadgeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: TeamComponent }])
  ]
})
export class TeamModule {}
