package com.example.backend.services.impl;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.backend.data.entities.User;
import com.example.backend.data.repositories.UserRepository;
import com.example.backend.dto.request.UserLoginRequest;
import com.example.backend.dto.response.UserLoginResponse;
import com.example.backend.exceptions.BadRequestException;
import com.example.backend.services.LoginService;

import lombok.*;

@Service
@Builder
public class LoginServiceImpl implements LoginService {

    @Autowired
    private UserRepository userRepository;

    @Override
    public UserLoginResponse login(UserLoginRequest userLoginRequest) {
        String username = userLoginRequest.getUsername();
        Optional<User> userOpt = userRepository.findByUsername(username);
        System.out.println(userOpt);
        if (!userOpt.isPresent()) {
            throw new BadRequestException("Username or password is incorrect. Please try again");
        }
        if (!userOpt.get().getPassword().equals(userLoginRequest.getPassword())) {
            throw new BadRequestException("Username or password is incorrect. Please try again");
        }
        return UserLoginResponse.builder().username(username).fullName(userOpt.get().getFullName()).build();
    }

}
