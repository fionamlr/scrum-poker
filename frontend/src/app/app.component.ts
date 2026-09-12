import {Component, inject} from '@angular/core';
import {LobbyComponent} from './features/lobby/lobby.component';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [LobbyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  private translateService = inject(TranslateService);

  switchLanguage(language: string) {
    this.translateService.use(language);
  }
}
