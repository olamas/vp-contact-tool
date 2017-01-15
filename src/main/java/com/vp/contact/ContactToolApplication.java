package com.vp.contact;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication(scanBasePackages={" com.vp.contact"})
public class ContactToolApplication {
	
	public static void main(String[] args) {
		SpringApplication.run(ContactToolApplication.class, args);
	}
}
