package com.example.backend.services;

import com.example.backend.dto.UserLoginRequest;
import com.example.backend.dto.UserLoginResponse;

public interface LoginService {
    UserLoginResponse login(UserLoginRequest userLoginRequest);
}
