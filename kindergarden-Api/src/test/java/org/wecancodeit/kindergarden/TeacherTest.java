package org.wecancodeit.kindergarden;

import static org.hamcrest.Matchers.is;
import static org.junit.Assert.assertThat;

import javax.annotation.Resource;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.boot.test.autoconfigure.orm.jpa.TestEntityManager;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.wecancodeit.kindergarden.models.Teacher;
import org.wecancodeit.kindergarden.repositories.ChildRepository;
import org.wecancodeit.kindergarden.repositories.TeacherRepository;

@RunWith(SpringJUnit4ClassRunner.class)
@DataJpaTest
public class TeacherTest {
	
	@Resource
	private TestEntityManager entityManager;
	
	@Resource
	TeacherRepository teacherRepo;
	@Resource
	ChildRepository childRepo;
	@Test
	public void shouldAddAndGetTeacher() {
	
	Teacher teacher = teacherRepo.save(new Teacher("firstName", "lastName","subjectName",1));
	
	entityManager.persist(teacher);
	entityManager.flush();
	entityManager.clear();
	
	Long idToFind = 1L;
	Teacher teacherFromDB = teacherRepo.findById(idToFind).get();
	
	assertThat(teacherFromDB.getFirstName(), is("firstName"));
}

}
