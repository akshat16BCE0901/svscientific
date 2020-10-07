package com.svscientific.datamanagement;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication(scanBasePackages ="com.svscientific")
@EnableJpaRepositories(value = "com.svscientific.datamanagement.repository")
@EntityScan(value = "com.svscientific.datamanagement.models")
@ComponentScan(value = "com.svscientific")
public class DataManagementApplication {

    public static void main(String[] args) {
        SpringApplication.run(DataManagementApplication.class, args);
    }

}
