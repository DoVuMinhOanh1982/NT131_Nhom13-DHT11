package com.example.backend.data.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.*;

@Entity
@Table(name = "humidity_tbl")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class Humidity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    
    @Column(name = "humidity")
    private String humidity;

    @Column(name = "updatedAt")
    private Date updatedAt;
}
