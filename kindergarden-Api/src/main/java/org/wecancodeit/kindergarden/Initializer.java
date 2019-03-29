package org.wecancodeit.kindergarden;



import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.kindergarden.models.Child;
import org.wecancodeit.kindergarden.models.Parent;
import org.wecancodeit.kindergarden.models.Teacher;
import org.wecancodeit.kindergarden.repositories.ChildRepository;
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
	
	
	@Override
	public void run(String... args) throws Exception {
		Teacher teacherOne = teacherRepo.save(new Teacher("Miss", "Gold", "science", 2));
		Teacher teacherTwo = teacherRepo.save(new Teacher("Mr", "Edwards", "Art", 1));
		childRepo.save(new Child("Cory", "Lesi", "5", teacherOne));
		 childRepo.save(new Child("Jane", "Smith", "4", teacherTwo));
		childRepo.save(new Child("Avi", "P", "3", teacherTwo));
		
		Parent parentOne = parentRepo.save(new Parent("Mary", "Lesi", "123-567-8900", "mary@gmail.com"));
		Parent parentTwo = parentRepo.save(new Parent("Alex", "Smith", "122-567-8900", "alex@gmail.com"));
		Parent parentThree = parentRepo.save(new Parent("Aaron", "P", "123-567-8800", "aaron@gmail.com"));
		
		
		
		
		

		
		
		
		
	}
	

}
