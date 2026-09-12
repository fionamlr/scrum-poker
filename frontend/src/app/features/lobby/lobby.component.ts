import {Component} from '@angular/core';
import {RoomService} from '../../core/services/roomService';
import {RoomDTO} from '../../core/models/room.dto';
import {TranslatePipe} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-lobby',
  imports: [
    TranslatePipe
  ],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss',
})
export class LobbyComponent {
  constructor(
    private roomService: RoomService,
    private router: Router
  ) {}

  createRoom(name: string) {
    const newRoomDTO: RoomDTO = {
      roomName: name
    };

    this.roomService.createRoom(newRoomDTO).subscribe({
      next: (generatedUUID) => {
        console.log('Room ID: ', generatedUUID);
        this.router.navigate(['/room', generatedUUID]);
      },
      error: (error) => {
        console.error('Error while creating room: ', error);
      }
    });
  }
}
