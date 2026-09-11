package com.scrumpoker.backend.entity;

import com.scrumpoker.backend.enums.Status;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.Getter;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@Getter
@Setter
@Entity //Kennzeichnung fuer Spring, dass diese Klasse eine Tabelle in der Datenbank werden soll
public class Room {

    @Id //Kennzeichnung, dass es sich um den Primaerschluessel handelt
    @GeneratedValue(strategy = GenerationType.UUID) //automatische Generierung der UUIDs via Spring
    private UUID roomId;

    private String roomName;
    private String roomDescription;
    private Status status;

    @CreationTimestamp
    private LocalDateTime creationDate;

    private UUID ownerId;
    private List<UUID> members;
}
