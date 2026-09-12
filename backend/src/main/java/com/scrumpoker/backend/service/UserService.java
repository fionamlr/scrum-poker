package com.scrumpoker.backend.service;

import com.scrumpoker.backend.dto.UserDTO;
import com.scrumpoker.backend.entity.User;
import com.scrumpoker.backend.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UUID createUser(UserDTO userDTO) {
        User user = new User();
        user.setName(userDTO.getUserName());
        return  userRepository.save(user).getUserId();
    }
}
