package org.wecancodeit.kindergarden.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.kindergarden.models.Teacher;
import org.wecancodeit.kindergardenRepositories.TeacherRepository;

@RestController
public class TeacherController {
	@Resource
	TeacherRepository teacherRepo;
	
	@GetMapping("/teachers")
	public Collection<Teacher> getTeachers() {
		return (Collection<Teacher>) teacherRepo.findAll();
	}

}
