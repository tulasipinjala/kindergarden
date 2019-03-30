package org.wecancodeit.kindergarden;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.kindergarden.models.Parent;
import org.wecancodeit.kindergarden.repositories.ChildRepository;
import org.wecancodeit.kindergarden.repositories.ParentRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest

public class ParentTest {
	
	@Resource
	private TestEntityManager entityManager;
	
	@Resource
	ParentRepository parentRepo;
	
	@Resource
	ChildRepository childRepo;
	
	@Test
	public void shouldAddAndGetParent() {

		Parent parent = parentRepo.save(new Parent("firstName", "lastName", "PhoneNumber","email"));

		entityManager.persist(parent);
		entityManager.flush();
		entityManager.clear();

		Long idToFind = 1L;
		Parent parentFromDB = parentRepo.findById(idToFind).get();

		assertThat(parentFromDB.getFirstName(), is("firstName"));
	}
	


}
