import {Component, inject} from '@angular/core';
import {RoomService} from '../../core/services/roomService';
import {RoomDTO} from '../../core/models/room.dto';

@Component({
  selector: 'app-lobby',
  imports: [
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
