package com.codebreak.web;

import org.junit.runner.RunWith;
import org.mockito.junit.MockitoJUnitRunner;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.PropertySource;
import org.springframework.test.context.ContextConfiguration;

@ContextConfiguration(classes = AppWebTestApp.class)
@PropertySource("classpath:/vendorAgreementsComponentTest.properties")
@RunWith(MockitoJUnitRunner.class)
public class BaseMockedTestClass {
	protected static final Logger logger = LoggerFactory.getLogger(BaseMockedTestClass.class);
}
