package com.scrumpoker.backend.service;

import com.scrumpoker.backend.dto.JoinRoomDTO;
import com.scrumpoker.backend.dto.RoomDTO;
import com.scrumpoker.backend.dto.UserDTO;
import com.scrumpoker.backend.entity.Room;
import com.scrumpoker.backend.entity.User;
import com.scrumpoker.backend.enums.Role;
import com.scrumpoker.backend.repository.RoomRepository;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
public class RoomService {
    private final RoomRepository roomRepository;
    public RoomService(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    public UUID createRoom(RoomDTO roomDTO) {
        Room room = new Room();
        room.setRoomName(roomDTO.getRoomName());

        User moderator = new User();
        moderator.setName(roomDTO.getCreatorName());
        moderator.setRole(Role.MODERATOR);

        List<User> participants = new ArrayList<>();
        participants.add(moderator);
        room.setParticipants(participants);

        return roomRepository.save(room).getRoomId();
    }

    public RoomDTO getRoom(UUID roomId) {
        Room room = roomRepository.findById(roomId).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Room not found"));

        RoomDTO roomDTO = new RoomDTO();
        roomDTO.setRoomName(room.getRoomName());

        List<UserDTO> playerList = new ArrayList<>();

        for (User participant : room.getParticipants()) {
            UserDTO userDTO = new UserDTO();
            userDTO.setUserName(participant.getName());
            userDTO.setRole(participant.getRole());
            playerList.add(userDTO);

            if (participant.getRole() == Role.MODERATOR) {
                roomDTO.setCreatorName(participant.getName());
            }
        }
        roomDTO.setPlayerList(playerList);
        return roomDTO;
    }

    public List<RoomDTO> getRooms() {
        List<Room> rooms = roomRepository.findAll();
        List<RoomDTO> roomDTOs = new ArrayList<>();
        for (Room room : rooms) {
            RoomDTO roomDTO = new RoomDTO();
            roomDTO.setRoomName(room.getRoomName());
            roomDTOs.add(roomDTO);
        }
        return roomDTOs;
    }

    public RoomDTO joinRoom(UUID roomId, JoinRoomDTO joinRequest) {
        Room room = roomRepository.findById(roomId)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND, "Room not found"));

        User newPlayer = new User();
        newPlayer.setName(joinRequest.getPlayerName());
        newPlayer.setRole(Role.PLAYER);

        room.getParticipants().add(newPlayer);

        roomRepository.save(room);

        return getRoom(roomId);
    }
}
