import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ThemeChangeService {

  constructor(private router: Router, @Inject(DOCUMENT) private document) {
    this.router.events.pipe(
      filter((e): e is NavigationEnd => e instanceof NavigationEnd)
    ).subscribe(event => {
      if (event.url.endsWith('home')) {
        this.document.documentElement.style.setProperty('--header-background', 'var(--dark)')
      } else {
        this.document.documentElement.style.setProperty('--header-background', 'var(--black)')
      }
    });
  }
}
