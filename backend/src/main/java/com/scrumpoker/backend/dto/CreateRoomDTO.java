package com.scrumpoker.backend.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class CreateRoomDTO {
    private String roomName;
    private String creatorName;
}
