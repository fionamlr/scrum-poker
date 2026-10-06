import {Component, inject, OnInit, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoomService} from '../../core/services/roomService';
import {TranslatePipe} from '@ngx-translate/core';
import {RoomDTO} from '../../core/models/room.dto';
import {CardDeckComponent} from './card-deck/card-deck.component';
import {PlayerListComponent} from './player-list/player-list.component';

@Component({
  selector: 'app-poker-table',
  imports: [
    TranslatePipe,
    CardDeckComponent,
    PlayerListComponent
  ],
  templateUrl: './poker-table.component.html',
  styleUrl: './poker-table.component.scss',
  standalone: true
})
export class PokerTableComponent implements OnInit{
  private activatedRoute = inject(ActivatedRoute);
  private roomService = inject(RoomService);

  currentRoomData = signal<RoomDTO | null>(null);
  estimationCards: string[] = ['0', '1', '2', '3', '5', '8', '13', '?'];
  selectedCard = signal<string | null>(null);

  ngOnInit(): void {
    const roomId = this.activatedRoute.snapshot.paramMap.get('id');

    if (roomId) {
      this.roomService.getRoom(roomId).subscribe({
        next: (roomData) => {
          this.currentRoomData.set(roomData);
        },
        error: (error) => {
          console.error('Error loading the room: ', error);
        }
      });
    }
  }

  selectCard(card: string) {
    this.selectedCard.set(card);
    console.log("Hier kommt Websocket zum BE");
  }
}
