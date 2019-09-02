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
        map(({ payload }: RouterNavigatedAction) => payload.routerState.url),
        tap((url: string) => {
          url === '/home'
            ? this.setTheme('var(--dark)', 'var(--opacity-home)')
            : this.setTheme('var(--black)', 'var(--opacity-default)');
        })
      ),
    { dispatch: false }
  );

  constructor(private actions$: Actions, @Inject(DOCUMENT) private document) {}

  setTheme(background: string, opacity: string) {
    this.document.documentElement.style.setProperty(
      '--header-background',
      background
    );

    this.document.documentElement.style.setProperty('--nav-opacity', opacity);
  }
}
