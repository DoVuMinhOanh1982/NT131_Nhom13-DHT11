package com.example.backend.dto.request;

import javax.validation.constraints.NotBlank;

import lombok.*;

@Getter
@Setter
@Builder
public class HumidityRequest {
    @NotBlank(message = "Missing fields, please doublecheck your fields")
    private String humidity;

    private String nullField;
}
