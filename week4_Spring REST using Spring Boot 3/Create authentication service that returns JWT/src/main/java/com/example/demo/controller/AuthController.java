package com.example.demo.controller;

import com.example.demo.util.JwtUtil;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Base64;

@RestController
public class AuthController {

    private final JwtUtil jwtUtil;

    public AuthController(JwtUtil jwtUtil) {
        this.jwtUtil = jwtUtil;
    }

    @GetMapping("/authenticate")
    public ResponseEntity<?> authenticate(HttpServletRequest request) {
        String authHeader = request.getHeader("Authorization");

        if (authHeader == null || !authHeader.startsWith("Basic ")) {
            return ResponseEntity.status(401).body("Missing or invalid Authorization header");
        }

        String base64Credentials = authHeader.substring("Basic ".length());
        byte[] decodedBytes = Base64.getDecoder().decode(base64Credentials);
        String credentials = new String(decodedBytes);
        String[] userDetails = credentials.split(":", 2);

        if (userDetails.length != 2) {
            return ResponseEntity.status(400).body("Invalid basic auth format");
        }

        String username = userDetails[0];
        String password = userDetails[1];

        if ("user".equals(username) && "pwd".equals(password)) {
            String token = jwtUtil.generateToken(username);
            return ResponseEntity.ok().body("{"token":"" + token + ""}");
        } else {
            return ResponseEntity.status(403).body("Invalid credentials");
        }
    }
}