import { NgModule } from '@angular/core';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { WebpageDataAccessModule } from '@ng-stuttgart/webpage/data-access';
import { WebpageUiHeaderModule } from '@ng-stuttgart/webpage/ui/header';
import { EffectsModule } from '@ngrx/effects';
import { RouterState, StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [ AppComponent ],
  imports: [
    BrowserModule,
    WebpageUiHeaderModule,
    BrowserAnimationsModule,
    MatSnackBarModule,
    AppRoutingModule,
    StoreModule.forRoot([], {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    RouterModule.forRoot([]),
    EffectsModule.forRoot([]),
    StoreRouterConnectingModule.forRoot({ routerState: RouterState.Minimal }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
    WebpageDataAccessModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    })
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
