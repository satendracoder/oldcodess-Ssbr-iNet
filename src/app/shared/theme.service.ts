import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  constructor(private cookieService: CookieService) { }

  setDarkTheme(isDarkTheme: boolean) {
    if (isDarkTheme) {
      document.body.classList.add('dark-theme');
    } else {
      document.body.classList.remove('dark-theme');
    }
    this.cookieService.set('isDarkTheme', isDarkTheme.toString());
  }

  isDarkTheme() {
    const darkThemeCookie = this.cookieService.get('isDarkTheme');
    return darkThemeCookie === 'true';
  }
}