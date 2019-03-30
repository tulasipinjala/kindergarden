package org.wecancodeit.kindergarden;

import static org.hamcrest.Matchers.is;

import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.kindergarden.models.Child;
import org.wecancodeit.kindergarden.repositories.ChildRepository;
import org.wecancodeit.kindergarden.repositories.ParentRepository;
import org.wecancodeit.kindergarden.repositories.TeacherRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest

public class ChildTest {
	
		@Resource
		private TestEntityManager entityManager;
		
		@Resource
		ChildRepository childRepo;
		
		@Resource
		ParentRepository parentRepo;
		
		@Resource
		TeacherRepository teacherRepo;
		
		@Test
		public void shouldAddAndGetChild() {
		Child child = childRepo.save(new Child("firstName", "lastName", "age"));
		
		entityManager.persist(child);
		entityManager.flush();
		entityManager.clear();
		
		Long idToFind = 1L;
		Child childFromDB = childRepo.findById(idToFind).get();
		
		assertThat(childFromDB.getFirstName(), is("firstName"));
	}

}
