package com.codebreak.api;

import static org.junit.Assert.fail;

import java.util.List;

import org.junit.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.test.annotation.Rollback;

import com.codebreak.documents.EmployeeRegistrationDTO;
import com.codebreak.dto.CommonListWrapperDTO;
import com.codebreak.repository.EmployeeRepository;
import com.codebreak.web.BaseMockedTestClass;

@Rollback
public class EmployeeControllerMockedTest extends BaseMockedTestClass {

	@InjectMocks
	EmployeeController employeeController;

	@Mock
	private EmployeeRepository employeeRepository;
	
	/**
	 * Success Scenario
	 */
	@Test
	public void registerEmployeeTest() {
		try {
			EmployeeRegistrationDTO employeeRegistrationDTO = new EmployeeRegistrationDTO("Superuser", "Junit", "Male",
					"01-01-2018", "HR");
			CommonListWrapperDTO<EmployeeRegistrationDTO> response = employeeController
					.registerEmployee(employeeRegistrationDTO);
			Integer statusCode = response.getStatus();
			List<EmployeeRegistrationDTO> registeredEmployeeList = response.getResults();
			assert (statusCode.equals(200));
			assert (null != registeredEmployeeList && registeredEmployeeList.size() == 1);
		} catch (Exception e) {
			logger.error("Test Case registerEmployeeTest Failed", e);
			fail();
		}
	}

	/**
	 * Success Scenario
	 */
	@Test
	public void fetchRegisteredEmployeesTest() {
		try {
			CommonListWrapperDTO<EmployeeRegistrationDTO> response = employeeController.fetchRegisteredEmployees();
			Integer statusCode = response.getStatus();
			List<EmployeeRegistrationDTO> registeredEmployeeList = response.getResults();
			assert (statusCode.equals(200));
		} catch (Exception e) {
			logger.error("Test Case fetchRegisteredEmployeesTest Failed", e);
			fail();
		}
	}
}
