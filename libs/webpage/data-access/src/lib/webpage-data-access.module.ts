import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { ThemeChangeEffects } from './+state/theme-change.effects';

@NgModule({
  imports: [
    StoreModule.forFeature('router', {
      router: routerReducer
    }),
    EffectsModule.forFeature([ThemeChangeEffects])
  ]
})
export class WebpageDataAccessModule {}
