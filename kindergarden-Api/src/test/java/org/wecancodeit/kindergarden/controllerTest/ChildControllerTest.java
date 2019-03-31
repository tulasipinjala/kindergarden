package org.wecancodeit.kindergarden.controllerTest;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.wecancodeit.kindergarden.controllers.ChildController;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ChildControllerTest {

	@Autowired
	private ChildController testChildController;

	@Test
	public void contextLoads() throws Exception {
		assertThat(testChildController).isNotNull();
	}

}