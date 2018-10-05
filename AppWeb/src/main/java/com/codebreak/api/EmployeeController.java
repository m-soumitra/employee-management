package com.codebreak.api;

import java.util.ArrayList;
import java.util.List;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.codebreak.documents.EmployeeRegistrationDTO;
import com.codebreak.dto.CommonListWrapperDTO;
import com.codebreak.repository.EmployeeRepository;

/**
 * 
 * @author smohakud
 *
 */
@RestController("employeeController")
@RequestMapping(value = "api", produces = MediaType.APPLICATION_JSON_VALUE)
public class EmployeeController {

	private final Logger logger = LoggerFactory.getLogger(this.getClass());

	private List<EmployeeRegistrationDTO> employeesList = new ArrayList<>();

	{
		employeesList.add(new EmployeeRegistrationDTO("Amar", "Gonsalvez", "Male", "1960-01-01", "HR"));
	}

	@Autowired
	@Qualifier("employeeRepository")
	private EmployeeRepository employeeRepository;

	/**
	 * Fetched all the registered users
	 * 
	 * @return
	 */
	@GetMapping(value = "/fetchemployees")
	public CommonListWrapperDTO<EmployeeRegistrationDTO> fetchRegisteredEmployees() {
		logger.info("{}", employeeRepository);
		List<EmployeeRegistrationDTO> returnedList = employeeRepository.findAll();
		CommonListWrapperDTO<EmployeeRegistrationDTO> commonListWrapperDTO = new CommonListWrapperDTO<>();
		commonListWrapperDTO.setMessage("Retrieved Registered Users");
		commonListWrapperDTO.setStatus(200);
		commonListWrapperDTO.setResults(returnedList);
		return commonListWrapperDTO;
	}

	/**
	 * Registers a user
	 * 
	 * @param employeeDetails
	 * @return
	 */
	@RequestMapping(value = "/registeremployee", method = RequestMethod.POST)
	public CommonListWrapperDTO<EmployeeRegistrationDTO> registerEmployee(
			@RequestBody @Valid EmployeeRegistrationDTO employeeDetails) {
		employeeRepository.save(employeeDetails);
		employeesList.add(employeeDetails);
		CommonListWrapperDTO<EmployeeRegistrationDTO> commonListWrapperDTO = new CommonListWrapperDTO<>();
		commonListWrapperDTO.setMessage("Registered Users");
		commonListWrapperDTO.setStatus(200);
		List<EmployeeRegistrationDTO> returnedList = new ArrayList<>();
		returnedList.add(employeeDetails);
		commonListWrapperDTO.setResults(returnedList);
		return commonListWrapperDTO;
	}

}
