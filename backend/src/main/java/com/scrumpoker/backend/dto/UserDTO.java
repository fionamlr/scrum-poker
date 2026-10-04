package com.scrumpoker.backend.dto;

import com.scrumpoker.backend.enums.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserDTO {
    private String userName;
    private Role role;
}
