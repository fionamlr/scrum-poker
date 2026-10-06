import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoomDTO} from '../models/room.dto';
import {JoinRoomDTO} from '../models/joinRoom.dto';
import {CreateRoomDTO} from '../models/createRoom.dto';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private readonly apiUrl = 'http://localhost:8080/api/rooms';
  private http = inject(HttpClient);

  createRoom(room: CreateRoomDTO): Observable<string> {
    return this.http.post<string>(this.apiUrl, room);
  }

  getRoom(roomId: string): Observable<RoomDTO> {
    return this.http.get<RoomDTO>(`${this.apiUrl}/${roomId}`);
  }

  joinRoom(roomId: string, joinRequest: JoinRoomDTO) {
    return this.http.post<RoomDTO>(`${this.apiUrl}/${roomId}/join`, joinRequest);
  }
}
