package com.codebreak.repository;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.codebreak.documents.EmployeeRegistrationDTO;

@Transactional
@Repository("employeeRepository")
public interface EmployeeRepository extends MongoRepository<EmployeeRegistrationDTO, String> {

}