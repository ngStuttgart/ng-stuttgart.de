import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ArchiveComponent } from './archive.component';
import { EmbeddifyPipe } from './embeddify.pipe';

@NgModule({
  declarations: [ArchiveComponent, EmbeddifyPipe],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ArchiveComponent }])
  ]
})
export class ArchiveModule {}
