package com.example.miniapp.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.miniapp.Entity.UserEntity;
import com.example.miniapp.Service.UserService;

@RestController
@RequestMapping("/api/users")
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    private UserService userService;

    // REGISTER API
    @PostMapping("/register")
    public String registerUser(@RequestBody UserEntity user) {
        return userService.register(user);
    }

    // LOGIN API
    @PostMapping("/login")
    public UserEntity loginUser(@RequestBody UserEntity user) {
        return userService.login(user.getEmail(), user.getPassword());
    }
}
