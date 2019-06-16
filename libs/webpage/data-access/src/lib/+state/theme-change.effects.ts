import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ROUTER_NAVIGATED } from '@ngrx/router-store';
import { tap } from 'rxjs/operators';

@Injectable()
export class ThemeChangeEffects {
  changeTheme$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(ROUTER_NAVIGATED),
        tap(() => {
          this.route.snapshot.firstChild.routeConfig.path === 'home'
            ? this.setBackgroundTheme('var(--dark)')
            : this.setBackgroundTheme('var(--black)');
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    @Inject(DOCUMENT) private document,
    private route: ActivatedRoute
  ) {}

  setBackgroundTheme(value: string) {
    this.document.documentElement.style.setProperty(
      '--header-background',
      value
    );
  }
}
