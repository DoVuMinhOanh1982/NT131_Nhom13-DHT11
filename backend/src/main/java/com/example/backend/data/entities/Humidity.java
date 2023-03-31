package com.example.backend.data.entities;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

import lombok.*;

@Entity
@Table(name = "temperature_tbl")
@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Humidity {
    @Column(name = "humidity")
    private String humidity;

    @Column(name = "updatedAt")
    private Date updatedAt;
}
