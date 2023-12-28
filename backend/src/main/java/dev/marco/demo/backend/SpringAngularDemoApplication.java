package dev.marco.demo.backend;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

/**
 * Compared to the Spring .jar application we extend the Application with the ServletInitializer
 * This allows us to run the Application from a WAR deployment.
 */
@SpringBootApplication
public class SpringAngularDemoApplication extends SpringBootServletInitializer {

	public static void main(String[] args) {
		SpringApplication.run(SpringAngularDemoApplication.class, args);
	}

}
