package com.codebreak.web;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.PropertySource;

@SpringBootApplication(scanBasePackages = {"com.codebreak"})
@PropertySource("classpath:/componentTest.properties")
public class AppWebTestApp {
    public static void main(final String... args) {
        SpringApplication.run(AppWebTestApp.class, args);
    }
}
