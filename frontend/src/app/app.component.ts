import {Component, inject} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private translateService = inject(TranslateService);

  isDarkMode = false;
  currentLang = 'de';

  switchLanguage(language: string) {
    this.currentLang = language;
    this.translateService.use(language);
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
  }

}
