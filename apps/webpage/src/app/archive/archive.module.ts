import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ArchiveComponent } from './archive.component';
import { EmbeddifyPipe } from './embeddify.pipe';

@NgModule({
  declarations: [ArchiveComponent, EmbeddifyPipe],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: ArchiveComponent }])
  ],
  providers: [EmbeddifyPipe]
})
export class ArchiveModule {}
