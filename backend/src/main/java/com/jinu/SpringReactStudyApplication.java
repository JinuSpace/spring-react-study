package com.jinu;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.web.servlet.error.ErrorMvcAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages = "com.jinu.example")
@EnableAutoConfiguration(exclude = {ErrorMvcAutoConfiguration.class})
public class SpringReactStudyApplication {

    public static void main(String[] args) {
        SpringApplication.run(SpringReactStudyApplication.class, args);
    }

}
