import {Component, computed, input, signal} from '@angular/core';
import {UserDto} from '../../../core/models/user.dto';
import {UpperCasePipe} from '@angular/common';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-player-list',
  imports: [
    UpperCasePipe,
    TranslatePipe
  ],
  templateUrl: './player-list.component.html',
  styleUrl: './player-list.component.scss',
  standalone: true
})
export class PlayerListComponent {
  players = input.required<UserDto[]>();
  playerCount = computed(() => this.players().length)
}
