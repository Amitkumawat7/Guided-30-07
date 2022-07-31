package com.example.emp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.CrossOrigin;

import com.example.emp.entity.Employee;

@RepositoryRestResource(path="emp")
@CrossOrigin("http://localHost:4200/")
public interface EmployeeRepository extends JpaRepository <Employee, Integer>{
	

}
