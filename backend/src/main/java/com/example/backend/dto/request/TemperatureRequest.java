package com.example.backend.dto.request;

import javax.validation.constraints.NotBlank;

import lombok.*;

@Getter
@Setter
@Builder
public class TemperatureRequest {
    @NotBlank(message = "Missing fields, please send both C and F for a better result")
    private String celcius;

    @NotBlank(message = "Missing fields, please send both C and F for a better result")
    private String fahrenheit;
}
