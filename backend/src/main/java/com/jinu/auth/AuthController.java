package com.jinu.auth;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginRequestDTO loginRequest) {
        // 로그인 로직 처리 (예: 사용자 인증)
        // 결과 예로 성공/실패 상태를 리턴
        boolean authenticated = "user".equals(loginRequest.getUsername())
                && "password".equals(loginRequest.getPassword());
        if (authenticated) {
            return ResponseEntity.ok().body("Login Successful");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid credentials");
        }
    }

}
