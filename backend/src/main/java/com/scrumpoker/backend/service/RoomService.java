package com.scrumpoker.backend.service;

import com.scrumpoker.backend.dto.RoomDTO;
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
}
