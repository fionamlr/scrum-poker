import {Component} from '@angular/core';
import {RoomService} from '../../core/services/roomService';
import {RoomDTO} from '../../core/models/room.dto';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-lobby',
  imports: [
    TranslatePipe
  ],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss',
})
export class LobbyComponent {
  constructor(private roomService: RoomService) {}

  createRoom(name: string) {
    const newRoomDTO: RoomDTO = {
      roomName: name
    };

    this.roomService.createRoom(newRoomDTO).subscribe({
      next: (generatedUUID) => {
        console.log('Room ID: ', generatedUUID);
      },
      error: (error) => {
        console.log('Error while creating room: ', error);
      }
    });
  }
}
