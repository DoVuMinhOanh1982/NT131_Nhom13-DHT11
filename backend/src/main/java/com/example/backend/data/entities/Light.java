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
public class Light {
    @Column(name = "light")
    private String light;

    @Column(name = "uv")
    private String uv;

    @Column(name = "windDensity")
    private String windDensity;

    @Column(name = "updatedAt")
    private Date updatedAt;
}
