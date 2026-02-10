package com.example.miniapp.Service;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.miniapp.Entity.UserEntity;
import com.example.miniapp.Repository.UserRepository;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    // REGISTER
    public String register(UserEntity user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            return "User already existed";
        }

        userRepository.save(user);
        return "Registered successfully";
    }

    // LOGIN
    public UserEntity login(String email, String password) {
        Optional<UserEntity> user = userRepository.findByEmail(email);

        if (user.isPresent() && user.get().getPassword().equals(password)) {
            return user.get();
        }

        return null;
    }
}

