import { Component } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {TranslatePipe} from '@ngx-translate/core';

@Component({
  selector: 'app-create-room-dialog',
  imports: [
    ReactiveFormsModule,
    TranslatePipe
  ],
  templateUrl: './create-room-dialog.component.html',
  styleUrl: './create-room-dialog.component.scss',
  standalone: true
})
export class CreateRoomDialogComponent {
  constructor(
    private dialogRef: MatDialogRef<CreateRoomDialogComponent>
  ) {}

  createRoomForm = new FormGroup({
    roomName: new FormControl('', { nonNullable: true, validators: Validators.required }),
    creatorName: new FormControl('', { nonNullable: true, validators: Validators.required }),
  })

  onSubmitCreateRoom() {
    if (this.createRoomForm.valid) {
      this.dialogRef.close(this.createRoomForm.value);
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
