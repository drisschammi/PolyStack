package com.charts;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;

@SpringBootApplication
@OpenAPIDefinition(
		info = @Info(
				title="Insurance Policy Analysis API",
				version="1.0",
				description="API documentation for insurance policy analysis",
				contact=@Contact(
						name = "Chammi Driss",
						email = "drisschami24@gmail.com",
						url="https://ma.linkedin.com/in/drisschammi"
				)
		)
)
public class DatasetAnalysisServiceApplication {

	public static void main(String[] args) {
		SpringApplication.run(DatasetAnalysisServiceApplication.class, args);
	}

}
