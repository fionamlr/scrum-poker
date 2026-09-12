package com.scrumpoker.backend.entity;

import com.scrumpoker.backend.enums.Role;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

import java.util.UUID;

@Getter
@Setter
@Entity
@Table(name = "scrumpoker_user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID userId;

    private String name;

    @Enumerated(EnumType.STRING)
    private Role role;
}
