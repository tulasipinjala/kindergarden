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
import org.wecancodeit.kindergarden.models.Parent;
import org.wecancodeit.kindergarden.repositories.ParentRepository;
@CrossOrigin
@RestController
public class ParentController {
	
	@Resource
	ParentRepository parentRepo;
	
	@GetMapping("/parents")
	public Collection<Parent> getParents() {
		return(Collection<Parent>) parentRepo.findAll();
	}
	@GetMapping("/parents/{id}")
	public Parent getParent(@PathVariable Long id) {
		return parentRepo.findById(id).get(); 
	}
	
	@PostMapping("/parents/add")
	public Collection<Parent> addParent(@RequestBody String body) throws JSONException{
	 JSONObject json = new JSONObject(body);
	 String firstName = json.getString("firstName");
		String lastName = json.getString("lastName");
		String phoneNumber = json.getString("phoneNumber");
		String email = json.getString("email");
	 parentRepo.save(new Parent(firstName, lastName, phoneNumber, email));
	 return (Collection<Parent>) parentRepo.findAll();
	}

}
