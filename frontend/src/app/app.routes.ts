import { Routes } from '@angular/router';
import {PokerTableComponent} from './features/poker-table/poker-table.component';
import {StartpageComponent} from './features/startpage/startpage.component';

export const routes: Routes = [
  {
    path: '',
    component: StartpageComponent
  },
  {
    path: 'room/:id',
    component: PokerTableComponent
  }
];
