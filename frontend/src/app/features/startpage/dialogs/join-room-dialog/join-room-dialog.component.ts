import {Component, inject} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-join-room-dialog',
  imports: [
    TranslatePipe,
    ReactiveFormsModule
  ],
  templateUrl: './join-room-dialog.component.html',
  styleUrl: './join-room-dialog.component.scss',
  standalone: true
})
export class JoinRoomDialogComponent {
  private dialogRef = inject(MatDialogRef<JoinRoomDialogComponent>)

  joinRoomForm = new FormGroup({
    roomId: new FormControl('', { nonNullable: true, validators: Validators.required }),
    playerName: new FormControl('', { nonNullable: true, validators: Validators.required })
  })

  onSubmitJoinRoom() {
    if (this.joinRoomForm.valid) {
      this.dialogRef.close(this.joinRoomForm.value);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
