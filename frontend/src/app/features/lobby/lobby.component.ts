import {Component} from '@angular/core';
import {RoomService} from '../../core/services/roomService';
import {RoomDTO} from '../../core/models/room.dto';
import {TranslatePipe} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-lobby',
  imports: [
    TranslatePipe,
    ReactiveFormsModule
  ],
  templateUrl: './lobby.component.html',
  styleUrl: './lobby.component.scss',
})
export class LobbyComponent {
  lobbyForm = new FormGroup({
    roomName: new FormControl('', { nonNullable: true, validators: Validators.required }),
    creatorName: new FormControl('', { nonNullable: true, validators: Validators.required }),
  })

  constructor(
    private roomService: RoomService,
    private router: Router
  ) {}

  onSubmit() {
    if (this.lobbyForm.valid) {
      const formValues = this.lobbyForm.value;
      const newRoomDTO: RoomDTO = {
        roomName: formValues.roomName ?? '',
        creatorName: formValues.creatorName ?? ''
      }

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
}
