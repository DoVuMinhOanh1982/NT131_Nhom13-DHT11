package com.example.backend.dto;

import lombok.*;

@Getter
@Setter
@Builder
public class UserLoginResponse {
    private String username;
    private String fullName;
}
