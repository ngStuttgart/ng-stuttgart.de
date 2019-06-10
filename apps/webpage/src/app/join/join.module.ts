import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { JoinComponent } from './join.component';

@NgModule({
  declarations: [JoinComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: JoinComponent }])
  ]
})
export class JoinModule {}
