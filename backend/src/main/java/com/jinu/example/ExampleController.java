package com.jinu.example;

import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@Slf4j
public class ExampleController {

    @GetMapping("/example")
    public String example() {
        log.info("example");
        return "Spring Boot와 React가 연결되었습니다!";
    }
}
