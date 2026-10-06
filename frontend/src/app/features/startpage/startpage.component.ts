import {Component, inject} from '@angular/core';
import {RoomService} from '../../core/services/roomService';
import {RoomDTO} from '../../core/models/room.dto';
import {TranslatePipe} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CreateRoomDialogComponent} from './dialogs/create-room-dialog/create-room-dialog.component';
import {JoinRoomDialogComponent} from './dialogs/join-room-dialog/join-room-dialog.component';
import {CreateRoomDTO} from '../../core/models/createRoom.dto';

@Component({
  selector: 'app-startpage',
  imports: [
    TranslatePipe,
  ],
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.scss',
  standalone: true
})
export class StartpageComponent {
  private dialog = inject(MatDialog);
  private roomService = inject(RoomService);
  private router = inject(Router);

  estimationCards: string[] = ['1', '3', '5', '8', '13', '?'];

  openCreateRoomDialog() {
    const dialogRef = this.dialog.open(CreateRoomDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newRoomDTO: CreateRoomDTO = {
          roomName: result.roomName,
          creatorName: result.creatorName,
        };
        this.roomService.createRoom(newRoomDTO).subscribe({
          next: (generatedUUID) => {
            this.router.navigate(['/room', generatedUUID]);
          },
          error: (error) => console.error(error)
        });
      }
    })
  }

  openJoinRoomDialog() {
    const dialogRef = this.dialog.open(JoinRoomDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const joinDto = { playerName: result.playerName };
        this.roomService.joinRoom(result.roomId, joinDto).subscribe({
          next: () => {
            this.router.navigate(['/room', result.roomId]);
          },
          error: (error) => {
            console.error('Fehler beim Beitreten des Raums:', error);
          }
        });
      }
    });
  }
}
