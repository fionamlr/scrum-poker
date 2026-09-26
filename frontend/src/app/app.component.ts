import {Component, inject, signal} from '@angular/core';
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

  isDarkMode = signal(false);
  currentLang = signal('de');

  switchLanguage(language: string) {
    this.currentLang.set(language);
    this.translateService.use(language);
  }

  toggleTheme() {
    this.isDarkMode.update(value => !value);
  }

}
