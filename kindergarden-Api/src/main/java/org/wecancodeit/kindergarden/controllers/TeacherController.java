package org.wecancodeit.kindergarden.controllers;

import java.util.Collection;

import javax.annotation.Resource;

import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.wecancodeit.kindergarden.models.Child;
import org.wecancodeit.kindergarden.models.Parent;
import org.wecancodeit.kindergarden.models.Teacher;
import org.wecancodeit.kindergarden.repositories.TeacherRepository;
@CrossOrigin
@RestController
public class TeacherController {
	@Resource
	TeacherRepository teacherRepo;
	
	@GetMapping("/teachers")
	public Collection<Teacher> getTeachers() {
		return (Collection<Teacher>) teacherRepo.findAll();
	}
	
	@GetMapping("/teachers/{id}")
	public Teacher getTeacher(@PathVariable Long id) {
		return teacherRepo.findById(id).get(); 
	}
	
	@PostMapping("/teachers/add")
	public Collection<Teacher> addTeacher(@RequestBody String body) throws JSONException{
	 JSONObject json = new JSONObject(body);
	 String firstName = json.getString("firstName");
		String lastName = json.getString("lastName");
		String subjectName = json.getString("subjectName");
		int studentsCount = json.getInt("studentsCount");
	 teacherRepo.save(new Teacher(firstName, lastName, subjectName, studentsCount));
	 return (Collection<Teacher>) teacherRepo.findAll();
	}
	
}
