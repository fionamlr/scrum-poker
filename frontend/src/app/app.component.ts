import { Component } from '@angular/core';
import {LobbyComponent} from './features/lobby/lobby.component';

@Component({
  selector: 'app-root',
  imports: [LobbyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
