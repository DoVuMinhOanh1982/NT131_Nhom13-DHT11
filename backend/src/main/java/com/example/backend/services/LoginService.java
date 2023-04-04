package com.example.backend.services;

import com.example.backend.dto.request.UserLoginRequest;
import com.example.backend.dto.response.UserLoginResponse;

public interface LoginService {
    UserLoginResponse login(UserLoginRequest userLoginRequest);
}
