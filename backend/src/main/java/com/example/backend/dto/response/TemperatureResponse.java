package com.example.backend.dto.response;

import lombok.*;

@Getter
@Setter
@Builder
public class TemperatureResponse {
    private String celcius;
    private String fahrenheit;
    private String comment;
    private String suggest;
    private String warning;
}
