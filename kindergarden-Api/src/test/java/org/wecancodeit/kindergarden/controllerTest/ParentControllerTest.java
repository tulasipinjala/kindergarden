package org.wecancodeit.kindergarden.controllerTest;

import static org.assertj.core.api.Assertions.assertThat;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.wecancodeit.kindergarden.controllers.ParentController;

@RunWith(SpringRunner.class)
@SpringBootTest
public class ParentControllerTest {
	
	@Autowired
	private ParentController testParentController;
	
	@Test
	public void contextLoads() throws Exception {
		assertThat(testParentController).isNotNull();
	}

}
