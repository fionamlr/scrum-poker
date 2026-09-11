package com.scrumpoker.backend.repository;

import com.scrumpoker.backend.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface RoomRepository extends JpaRepository<Room, UUID> { //Automatische Generierung Datenbankbefehle durch Spring Boot
}
