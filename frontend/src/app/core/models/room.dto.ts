import {UserDto} from './user.dto';

export interface RoomDTO {
  roomName: string;
  creatorName: string;
  playerList: UserDto[];
}
