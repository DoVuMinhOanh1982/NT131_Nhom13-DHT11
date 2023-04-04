package com.example.backend.dto.response;

import lombok.*;

@Getter
@Setter
@Builder
public class HumidityResponse {
    private String humidity;
    private String suggest;
    private String warning;
}
