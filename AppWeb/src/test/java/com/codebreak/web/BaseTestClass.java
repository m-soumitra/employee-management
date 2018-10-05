package com.codebreak.web;

import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.PropertySource;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@ContextConfiguration(classes = AppWebTestApp.class)
@PropertySource("classpath:/vendorAgreementsComponentTest.properties")
@RunWith(SpringJUnit4ClassRunner.class)
public abstract class BaseTestClass {
	protected static final Logger logger = LoggerFactory.getLogger(BaseTestClass.class);
}
