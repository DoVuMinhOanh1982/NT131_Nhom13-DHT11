package com.example.backend.dto.response;

import lombok.*;

@Getter
@Setter
@Builder
public class UserLoginResponse {
    private String username;
    private String fullName;
}
