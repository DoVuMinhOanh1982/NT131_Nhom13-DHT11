package com.example.backend.dto;

import javax.validation.constraints.NotBlank;

import lombok.*;

@Getter
@Setter
@Builder
public class LightRequest {
    @NotBlank(message = "Missing fields, please doublecheck your fields")
    private String light;

    @NotBlank(message = "Missing fields, please doublecheck your fields")
    private String uv;

    @NotBlank(message = "Missing fields, please doublecheck your fields")
    private String windDensity;
}
