import { Component, PLATFORM_ID, Inject } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

declare var gtag;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  // tslint:disable-next-line: ban-types
  constructor(private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    if (isPlatformBrowser(this.platformId)) {
      const navEndEvents$ = this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd)
      );

      navEndEvents$.subscribe((event: NavigationEnd) => {
        gtag('config', 'UA-154695097-1', {
          page_path: event.urlAfterRedirects
        });
      });
    }
  }
}
