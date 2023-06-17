package com.douglasmatosdev.studies;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.logging.Logger;

@SpringBootApplication
public class StudiesApplication {

	public static void main(String[] args) {
		Logger logger = Logger.getLogger(StudiesApplication.class.getName());

		System.out.println("Hello world");
		SpringApplication.run(StudiesApplication.class, args);
	}

}
