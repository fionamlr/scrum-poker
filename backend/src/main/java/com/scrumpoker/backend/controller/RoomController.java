package com.scrumpoker.backend.controller;

import com.scrumpoker.backend.dto.RoomDTO;
import com.scrumpoker.backend.service.RoomService;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/rooms")
@CrossOrigin(origins = "http://localhost:4200")
public class RoomController {
    private final RoomService roomService;

    public RoomController(RoomService roomService) {
        this.roomService = roomService;
    }

    @GetMapping
    public List<RoomDTO> getAllRooms() {
        return roomService.getRooms();
    }

    @GetMapping("/{roomId}")
    public RoomDTO getRoomById(@PathVariable UUID roomId) {
        return roomService.getRoom(roomId);
    }

    @PostMapping
    public UUID createRoom(@RequestBody RoomDTO roomDTO) { //@RequestBody = Daten aus dem Frontend, die mit gesendet werden
        return roomService.createRoom(roomDTO);
    }
}
