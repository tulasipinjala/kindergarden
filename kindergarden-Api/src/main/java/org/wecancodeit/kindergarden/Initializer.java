package org.wecancodeit.kindergarden;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.kindergarden.models.Child;
import org.wecancodeit.kindergarden.models.Comment;
import org.wecancodeit.kindergarden.models.Parent;
import org.wecancodeit.kindergarden.models.Teacher;
import org.wecancodeit.kindergarden.repositories.ChildRepository;
import org.wecancodeit.kindergarden.repositories.CommentRepository;
import org.wecancodeit.kindergarden.repositories.ParentRepository;
import org.wecancodeit.kindergarden.repositories.TeacherRepository;

@Service
public class Initializer implements CommandLineRunner {

	@Resource
	ChildRepository childRepo;

	@Resource
	ParentRepository parentRepo;

	@Resource
	TeacherRepository teacherRepo;
	
	@Resource
	CommentRepository commentRepo;

	@Override
	public void run(String... args) throws Exception {

		Teacher teacher1 = teacherRepo.save(new Teacher("Miss", "Gold", "science", 2));
		Teacher teacher2 = teacherRepo.save(new Teacher("Mr", "Edwards", "Art", 1));
		
		Comment comment1 = commentRepo.save(new Comment("nice teacher", teacher1));
		Comment comment2 = commentRepo.save(new Comment("cool teacher",teacher2));

		Child child1 = childRepo.save(new Child("Cory", "Lesi", "5"));
		Child child2 = childRepo.save(new Child("Jane", "Smith", "4"));
		Child child3 = childRepo.save(new Child("Avi", "P", "3"));

		Parent parent1 = parentRepo.save(new Parent("Mary", "Lesi", "123-567-8900", "mary@gmail.com"));
		Parent parent2 = parentRepo.save(new Parent("Alex", "Smith", "122-567-8900", "alex@gmail.com"));
		Parent parent3 = parentRepo.save(new Parent("Aaron", "P", "123-567-8800", "aaron@gmail.com"));

		child1.addParentToChild(parent1);
		child2.addParentToChild(parent2);
		child3.addParentToChild(parent3);

		child1.addTeacherToChild(teacher1);
		child2.addTeacherToChild(teacher2);
		child3.addTeacherToChild(teacher2);

		childRepo.save(child1);
		childRepo.save(child2);
		childRepo.save(child3);
		

	}

}
