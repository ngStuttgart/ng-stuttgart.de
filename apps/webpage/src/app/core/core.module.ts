import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MediaService } from './media.service';

@NgModule({
  declarations: [],
  imports: [CommonModule]
})
export class CoreModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [MediaService]
    };
  }
}
