package com.example.backend.dto.response;

import lombok.*;

@Getter
@Setter
@Builder
public class LightResponse {
    private String light;
    private String uv;
    private String windDensity;
    private String suggest;
    private String warning;
}
