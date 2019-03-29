package org.wecancodeit.kindergarden;

import javax.annotation.Resource;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Service;
import org.wecancodeit.kindergarden.models.Child;
import org.wecancodeit.kindergarden.models.Parent;
import org.wecancodeit.kindergarden.models.Teacher;
import org.wecancodeit.kindergardenRepositories.ChildRepository;
import org.wecancodeit.kindergardenRepositories.ParentRepository;
import org.wecancodeit.kindergardenRepositories.TeacherRepository;

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
		Child childOne = childRepo.save(new Child("Cory", "Lesi", "5"));
		Child childTwo = childRepo.save(new Child("Jane", "Smith", "4"));
		Child childThree =childRepo.save(new Child("Avi", "P", "3"));
		
		Parent parentOne = parentRepo.save(new Parent("Mary", "Lesi", "123-567-8900", "mary@gmail.com"));
		Parent parentTwo = parentRepo.save(new Parent("Alex", "Smith", "122-567-8900", "alex@gmail.com"));
		Parent parentThree = parentRepo.save(new Parent("Aaron", "P", "123-567-8800", "aaron@gmail.com"));
		
		Teacher teacherOne = teacherRepo.save(new Teacher("Miss", "Gold", "science", 2));
		Teacher teacherTwo = teacherRepo.save(new Teacher("Mr", "Edwards", "Art", 1));
		
		
		

		
		
		
		
	}
	

}
