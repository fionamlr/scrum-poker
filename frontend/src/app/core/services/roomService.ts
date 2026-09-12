import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RoomDTO} from '../models/room.dto';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  private readonly apiUrl = 'http://localhost:8080/api/rooms';

  constructor(private http: HttpClient) {}

  createRoom(room: RoomDTO): Observable<string> {
    return this.http.post<string>(this.apiUrl, room);
  }

  getRoom(roomId: string): Observable<RoomDTO> {
    return this.http.get<RoomDTO>(`${this.apiUrl}/${roomId}`);
  }
}
