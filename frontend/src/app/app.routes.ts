import { Routes } from '@angular/router';
import {PokerTableComponent} from './features/poker-table/poker-table.component';
import {LobbyComponent} from './features/lobby/lobby.component';

export const routes: Routes = [
  {
    path: '',
    component: LobbyComponent
  },
  {
    path: 'room/:id',
    component: PokerTableComponent
  }
];
