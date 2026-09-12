import {Component, OnInit, signal} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RoomService} from '../../core/services/roomService';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-poker-table',
  imports: [
    TranslatePipe
  ],
  templateUrl: './poker-table.component.html',
  styleUrl: './poker-table.component.scss',
})
export class PokerTableComponent implements OnInit{
  roomName = signal<string>('');
  creatorName = signal<string>('');

  constructor(
    private activatedRoute: ActivatedRoute,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    const roomId = this.activatedRoute.snapshot.paramMap.get('id');

    if (roomId) {
      this.roomService.getRoom(roomId).subscribe({
        next: (roomData) => {
          this.roomName.set(roomData.roomName);
          this.creatorName.set(roomData.creatorName);
        },
        error: (error) => {
          console.error('Error loading the room: ', error);
        }
      });
    }
  }

}
