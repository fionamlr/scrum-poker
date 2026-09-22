import {Component} from '@angular/core';
import {RoomService} from '../../core/services/roomService';
import {RoomDTO} from '../../core/models/room.dto';
import {TranslatePipe} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material/dialog';
import {CreateRoomDialogComponent} from './dialogs/create-room-dialog/create-room-dialog.component';
import {JoinRoomDialogComponent} from './dialogs/join-room-dialog/join-room-dialog.component';

@Component({
  selector: 'app-lobby',
  imports: [
    TranslatePipe,
  ],
  templateUrl: './startpage.component.html',
  styleUrl: './startpage.component.scss',
  standalone: true
})
export class StartpageComponent {
  estimationCards: string[] = ['1', '3', '5', '8', '13', '?'];

  constructor(
    private dialog: MatDialog,
    private roomService: RoomService,
    private router: Router
  ) {}

  openCreateRoomDialog() {
    const dialogRef = this.dialog.open(CreateRoomDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        const newRoomDTO: RoomDTO = {
          roomName: result.roomName,
          creatorName: result.creatorName
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
        console.log('Methode wird noch implementiert');
      }
    });
  }

}
