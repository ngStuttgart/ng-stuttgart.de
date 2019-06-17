import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED, RouterNavigatedAction } from '@ngrx/router-store';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class ThemeChangeEffects {
  changeTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ROUTER_NAVIGATED),
        map(({payload}: RouterNavigatedAction) => payload.routerState.url),
        tap((url: string) => {
          url === '/home'
            ? this.setBackgroundTheme('var(--dark)')
            : this.setBackgroundTheme('var(--black)');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    @Inject(DOCUMENT) private document
  ) {}

  setBackgroundTheme(value: string) {
    this.document.documentElement.style.setProperty(
      '--header-background',
      value
    );
  }
}
